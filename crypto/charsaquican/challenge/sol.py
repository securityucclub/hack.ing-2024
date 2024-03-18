from Crypto.Util.number import long_to_bytes

with open("charsaquican.txt", "rt") as f:
    params = [int(x) for x in f.read().split("\n")]

flag = long_to_bytes(pow(params[2], params[1], params[0]*params[3]))
print(flag)
