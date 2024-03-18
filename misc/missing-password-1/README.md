# Nombre: `Missing Password`
### Dificultad: `Starter (🃏)`
### Categoría: `misc`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{d0nt_h4rdc0d3_s3cr3ts}`
### Descripción:
La flag está guardada en el binario `main`, pero perdí la contraseña para obtenerla. ¿Puedes ayudarme a recuperar la flag?

### Hint
...

### Solución propuesta:
Con alguno de estos 
```bash
$ cat main
$ strings main
$ hexdump -C main
$ code main
$ vim main
```
buscar la flag en el raw binary.

#### Compilación
```bash
$ gcc main -o main.c
```
