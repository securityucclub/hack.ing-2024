# Nombre: `Missing Password 4`
### Dificultad: `Moderate (🃏🃏🃏)`
### Categoría: `pwn`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{p4ssw0rd_0v3rfl0w3d}`
### Descripción:
La flag está guardada en el servicio `<ip>:5001`, pero perdí la contraseña. ¿Puedes ayudarme a recuperar la flag?

### Hint
Buffers

### Solución propuesta:
Se tienen los buffers dentro de la función main y se declara `input` antes que `password`. Dado que `scanf` no está escrita de forma segura, podemos hacer overflow de `input` y sobreescribir `password` de modo que ambos buffers contengan el mismo string.
```bash
$ python sol.py
```

#### Compilación
```bash
$ gcc src.c -o run
```

#### Directorios
- `src` contiene el código fuente original y el redacted.
- `release` contiene el binario redacted.
