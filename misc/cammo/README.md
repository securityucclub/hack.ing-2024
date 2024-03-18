# Nombre: `Cammo`
### Dificultad: `TBE (🃏)`
### Categoría: `misc`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: ``

### Descripción:
No todo es lo que parece. Encuentra la flag en la imagen `camm0.jpg`.

### Hint
...

### Solución propuesta:
El desafío parte con la la imagen [camm0.jpg](./release/camm0.jpg). Al abrirlo con hexdump xxd strings o grep es posible encontrar el path zip/flag.jpg, el cual insinua que la imagen en verdad es un zip comprimido. Descomprimir y abrir imagen extraida para encontrar el flag:

```bash
$ unzip camm0.jpg; gimp tmp/cammo.jpg
```
