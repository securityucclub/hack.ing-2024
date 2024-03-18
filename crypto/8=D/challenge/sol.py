from Crypto.Util.number import long_to_bytes


def continued_fraction(n, d):
    a = []
    i = n // d
    n -= i * d
    a.append(i)
    while n != 0:
        n, d = d, n
        i = n // d
        n -= i * d
        a.append(i)

    return a


if __name__ == "__main__":
    with open("chall.txt", "rt") as f:
        contents = f.read().split("\n")
        n = int(contents[0][4:])
        e = int(contents[1][4:])
        c = int(contents[2][4:])

    a = continued_fraction(e, n)
    h2 = 0
    h1 = 1
    k2 = 1
    k1 = 0
    for term in a:
        h = term * h1 + h2
        k = term * k1 + k2

        h2 = h1
        h1 = h
        k2 = k1
        k1 = k

        try:
            if k % 2 == 0 or (e * k) % h != 1:
                continue
        except ZeroDivisionError:
            continue

        m = long_to_bytes(pow(c, k, n))
        if m[-1] == ord("}"):
            print(f"d: {k}\nm: {m}")
            break
