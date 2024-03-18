# Nombre: `Just Watch This Counterfeit`

### Dificultad: `Medium (🃏🃏🃏🃏)`

### Categoría: `web`

### Autor: [benjavicente](https://benjavicente.dev)

### Flag: `hack.ing{USE_M0RE_S3CURE_SECRETS_PLZ}`

### Building and compiling

```bash
docker compose up --build
```

Deja accesible el puerto 80.

### Descripción

Es un simple formulario de login.
¿Habrá algo si acceder como admin?

### Hint

Ve como se mantiene la sesión.

### Solución propuesta:

1. Iniciar session con cualquier usuario
2. Obtener el JWT a partir de las cookies
3. Crackear el secreto del JWT con alguna herramienta
4. Codificar un JWT con el secreto crackeado y el usuario admin
5. Iniciar sesión con el JWT crackeado con privilegios de admin
