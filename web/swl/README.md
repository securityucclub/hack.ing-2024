# Nombre: `Search Without Limits`

### Dificultad: `Moderate (🃏🃏🃏)`

### Categoría: `web`

### Autor: [benjavicente](https://benjavicente.dev)

### Flag: `hack.ing{L1M1T_0R_GET_YOUR_DB_ST0L3N}`

### Building and compiling

```bash
docker compose up --build
```

Deja accesible el puerto 80.

### Descripción

Hay un usuario que filtro la la flag.
Los logs son muchos así que se limita los caracteres de búsqueda.
Encuentra la flag.

### Hint

Busca administradores que conozcas.

### Solución propuesta:

1. Identificar que se usa LIKE en la consulta SQL (por hints u otro medio)
2. Añadir caracteres comodines `%` o `_` para obtener la BDD completa
3. Encontrar la flag en la BDD
