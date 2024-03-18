# Nombre: `noisy-blog`
### Dificultad: `Easy (🃏🃏)`
### Categoría: `web`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{s0m3t1m3s_1ts_3as1er_1f_y0u_d0nt_g3t_l0st_in_th3_N0153}`

### Descripción:
Dicen que el ruido es la mejor forma de ocultar algo. ¿Puedes encontrar la flag en [noisy-blog.framer.website](https://noisy-blog.framer.website/)?


### Solución:
En index podemos ver (con el inspector) que hay un form para correos invisible. Si ingresamos una dirección arbitraria de email, se nos redirige a una página extraña.

En esta página extraña no hay que perderse en el ruido. El path de la página es `/hfr-guvf-qrpbqrq-cngu`. Está codificado en rot13. Lo decodificamos y dice `use-this-decoded-path`. Si vamos a `/use-this-decoded-path` nos encontramos con un hex, que nuevamente es ruido. La flag está en el título de la página, al cual podemos acceder con el inspector.
