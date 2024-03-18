# Nombre: `random`
### Dificultad: `Medium (🃏🃏🃏)`
### Categoría: `crypto`
### Autor: [c4e](https://c4ebt.github.io/)
### Flag: `hack.ing{c4r3ful_wh3n_m3ss1ng_w1th_r4nd0mn3ss}`

### Descripción:
Este servidor dice las cosas más random que he visto en mi vida.

### Solución:
Un server OR'ea la flag con bytes de `/dev/urandom` y la manda. Hay que hacer varias requests e ir determinando que bits de la flag permanecen seteados hasta recuperar texto legible.
