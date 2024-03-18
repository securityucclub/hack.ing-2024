# Nombre: `Backdoored`
### Dificultad: `Easy (🃏🃏)`
### Categoría: `misc`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{b3tt3r_r34d_th3_fvck1ng_m4nu4l}`

## Building and compiling
Usamos un contenedor de Alpine. No sé por que pero hice un docker-compose
```bash
# docker compose up --force-recreate
```
Levanta un Alpine con sshd al puerto 2222. 

### Descripción
Escanea la `ip = <ip>` y encuentra la flag en el usuario `root`.

### Hint
<...>

### Solución propuesta:
Escanear los puertos con `nmap`

Al escanear debemos encontrar el puerto 2222 abierto para ssh. Ejemplo con nmap
```bash
$ sudo nmap -T4 -sV <ip>
```

Luego conectarse como root con contraseña `password`
```bash
$ ssh -p 2222 root@<ip>
```

La flag está en `/root/flag.txt`
