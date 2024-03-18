# Nombre: `Missing Password 5`
### Dificultad: `Medium (🃏🃏🃏🃏)`
### Categoría: `pwn`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{0v3rfl0w_th3_st4ck_b4s3_p01nt3r_r3g1st3r}`

### Descripción:
La flag está guardada en el servicio `<ip>:5002`, pero perdí la contraseña. ¿Puedes ayudarme a recuperar la flag?

### Hint
...

### Solución propuesta:
La idea es sobreescribir el registro del stack base pointer para que apunte a la dirección de la función secret.
```
$ python sol.py
```

#### Compilación
```bash
$ gcc src.c -o run -fno-stack-protector -no-pie
```

#### Directorios
- `src` contiene el código fuente original y el redacted.
- `release` contiene el binario redacted
