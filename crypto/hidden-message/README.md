# Nombre: `Hidden Message`
### Dificultad: `Hard (🃏🃏🃏🃏)`
### Categoría: `Crypto`
### Autor: [Diego]
### Flag: `hack.ing{1_ShOuLd_h4v3_U$eD_@_b1693R_3xPONent}`

### Descripción:
Algo me quiere decir este servidor...

### Solución:
Basta con pedir 5 veces el mensaje encriptado (ya que en la llave publica entregada se menciona que el exponente es 5). Con esto, se resuelve un sistema de ecuaciones con el teorema chino del resto. A la solución se le debe sacar la raiz quinta y este resultado pasarlo a bytes, consiguiendo así la flag.