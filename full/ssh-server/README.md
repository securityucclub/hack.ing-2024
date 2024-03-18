# Nombre: `ssh-server`
### Dificultad: `Hard (🃏🃏🃏🃏)`
### Categoría: `full`
### Autor: [Diego]
### Flag: `hack.ing{ShOULD'vE_1!$teNED_7O_tH3_IT_9UY}`


### Descripción
Servidor vulnlerable a escalada de privilegios

### Solución:
Entrar a la página y seguir la pista de que el usuario y clave son comunes. Entrar con user:passwd mediante ssh. Buscar que binarios tienen SUID. Utilizar find para escalar privilegios y conseguir la flag en el directorio /root

### Config:

**build:**

sudo docker build -t ssh-server .

**run:**

sudo docker run -d -p 2222:22 -p 8080:80 --name ssh-server ssh-server

**stop and remove:**

sudo docker stop ssh-server; sudo docker rm ssh-server 

**get ip:**

sudo docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ssh-server

**verify services:**

sudo docker port ssh-server

