# Nombre: `House of Cards`
### Dificultad: `Extreme (🃏🃏🃏🃏🃏)`
### Categoría: `pwn`
### Autor: [c4e](https://c4ebt.github.io/)
### Flag: `hack.ing{4r3_y0u_c0unting_c4rds!?}`

### Descripción:
The house always wins. Or does it? Try your luck at `[ip]:5001`

### Solución:
Glibc 2.31. Hay un one byte overflow en `edit`. Llenar el `tcachebin` de algún tamaño, luego freear un chunk al unsortedbin para sacar un leak de libc, y al mismo tiempo generar un overlap para poder sobreescribir un `tcache_head`. Con el leak, sacar un chunk en `__free_hook - 8` y hacer la técnica para ejecutar `system("/bin/sh\x00")`.
