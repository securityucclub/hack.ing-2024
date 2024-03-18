# Nombre: `Vacio`
### Dificultad: `Starter (🃏)`
### Categoría: `misc`
### Autor: `vicevalds`
### Flag: `hack.ing{0th3r_3nc0d1ng}`

### Descripción
Vacío eterno. Seguramente no encontrarás nada.

### Solución:
Para este desafío se nos proporciona el archivo [flg.txt](./challenge/flg.txt) el cual parece estar vacío. Pero mediante mayor inspección podemos darnos cuenta que parece estar intercalando espacios y tabs. Por ende nos damos cuenta de que podría contener data binario. En este caso, los tabs son `0` y los espacios son `1`. Elaboramos el siguiente codigo en python para convertir dicha data en ascii y obtener el flag:

```python
with open('flg.txt') as file:
    data = file.read()

    # Reemplazamos tabs por 0 y espacios por 1
    data = data.replace('\t', '0').replace(' ', '1')
    binary_string = data

    # Convertimos binario a ascii
    ascii_text = ''.join(
        chr(int(binary_string[i:i+8], 2))
        for i in range(0, len(binary_string), 8)
    )

    print(ascii_text)
```