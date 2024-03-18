with open('flg.txt') as file:
    data = file.read()
    data = data.replace('\t', '0').replace(' ', '1')
    binary_string = data
    ascii_text = ''.join(
        chr(int(binary_string[i:i+8], 2))
        for i in range(0, len(binary_string), 8)
    )

print(ascii_text)
