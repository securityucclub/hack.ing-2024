# Nombre: `Missing Password 2`
### Dificultad: `Moderate (🃏🃏🃏)`
### Categoría: `rev`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{d1s4sS3mBl3_4_fl4g}`
### Descripción:
La flag está guardada en el binario `main`, pero perdí la contraseña para obtenerla. ¿Puedes ayudarme a recuperar la flag?

### Hint
Assembly

### Solución propuesta:
La solución consiste en hacer análisis estático para hacer ingeniería reversa a la función `build_flag`.

Viendo el desensamlado con
```bash
$ objdump -D main
```
notamos que en la función `build_flag` se opera sobre cuatro valores grandes los cuales podemos convertir de hexadecimal a ascii para luego combinar formando la flag.

Se combinan de a un caracter y es fácil ver como se combinan una vez formado el substring `hack.ing`, minding endianness.

0x6c5f6d347b2e68 -> l_m4{.h

0x34344273646961 -> 44Bsdia

0x675f6c53316e63 -> g_lS1nc

0x7d66333373676b -> }f33sgk

Se
obtiene
leyendo
de
arriba
hacia
abajo
y
de
derecha
a
izquierda

0x6c5f6d347b2e68 -> l_m4{.(h)

0x34344273646961 -> 44Bsdi(a)

0x675f6c53316e63 -> g_lS1n(c)

0x7d66333373676b -> }f33sg(k)

#### Compilación
```bash
gcc -o main main.c
```
