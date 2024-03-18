from Crypto.Util.number import bytes_to_long

p = random_prime(pow(2, 1024))
q = random_prime(pow(2, 1024))
n = p*q
phi = (p - 1)*(q - 1)

d = phi
while gcd(d, phi) != 1:
    d = randint(0, Integer(int((1/3) * int(pow(n, 0.25)))))

e = inverse_mod(d, phi)

m = b"hack.ing{wh4t_4_sm4ll_d!_1_0nly_t4k3_ds_b1gg3r_th4n_(1/3)n^0.25}"
m = bytes_to_long(m)
c = pow(m, e, n)

print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")