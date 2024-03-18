# Nombre: `Missing Password 3`
### Dificultad: `Medium (🃏🃏🃏🃏)`
### Categoría: `rev`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{d3bBugg1ng_1s_fUn}`

### Descripción:
La flag está guardada en el binario `main`, pero perdí la contraseña para obtenerla. ¿Puedes ayudarme a recuperar la flag?

### Hint
¿Conoces lo que es un debugger?

### Solución propuesta:
La soluciónconsiste en hacer análisis dinámico con por ejemplo el debugger `gdb`. Una solución es notarque se compara el input
con un valor y luego se hace `jne` (jump not equal) queremos bypassear esta comparación para lo que se coloca un breakpoint
justo antes de la comparación, luego ejecutamos y al llegar al breakpoint se
hace jump a una dirección posterior al `jne` lo que resulta en que se imprima la flag.
```
break *(main+49)
run
jump *(main+82)
```

#### Compilación
```bash
gcc -o main main.c
```
