from pwn import *

# Get flag length
context.log_level = "debug"
#host = "localhost"
host = "random.h4ck1ng.org"
port = 80
p = remote(host, port)
p.sendafter(b"Number of requests?\n", b"1")
flag_length = len(p.recvrepeat(1))
p.close()

base = int("0x" + "ff"*46, 16)
data = []
max_tries = 69

for i in range(40):
    try:
        p = remote(host, port)
        p.sendafter(b"Number of requests?\n", str(max_tries).encode())

        for i in range(max_tries):
            data.append(int.from_bytes(p.recv(flag_length)))
    except:
        pass

    for i in range(len(data)):
        base &= data[i]

print(base.to_bytes(flag_length, "big"))
