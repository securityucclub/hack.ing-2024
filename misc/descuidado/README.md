# Nombre: `descuidado`
### Dificultad: `Easy (🃏🃏)`
### Categoría: `misc`
### Autor: vicevalds
### Flag: `hack.ing{p1s_cI3&_ur_H15t0ri4l}`

### Descripción:
El historial puede contener información valiosa

### Solución:
Encontrar el browser del usuario. Buscar en internet donde Chrome 
almacena el historial (History). LinuxOS: Se puede ver con `file` 
que corresponde a una base de datos sqlite y con un programa como `sqlitebrowser` o `grep`, 
se puede ver que el usuario visitó 'all-hack.ing-flags', un doc compartido de
excel con la flag. WindowsOS: añadir al archivo History una de las 
extensiones .db .sql .sqlite, y abrir con `sqlitebrowser` o abrir con `notepad`.
