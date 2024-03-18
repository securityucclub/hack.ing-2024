# Nombre: `keeper-bot`
### Dificultad: `Easy (🃏🃏)`
### Categoría: `ai`
### Autor: `milan`
### Flag: `hack.ing{appointment}`

### Descripción:
Just talk to Telegram user @vojdpeftijgutjy_bot
It will gladly give you the flag. Enthusiastically, even.

HOWEVER,
The method we wrote for sending it's messages to the Telegram API is a bit broken.
We may or may not have broken it on purpose.
Sorry! APIs are hard.

Good luck!

Just remember to wrap the flag with our CTF decorators like so:
hack.ing{the_flag_you_found}

-- The AI Safety Initiative @ UC, Hack.ING delegation

### Solución:
el bot efectivamente está tratando de decirte la flag correcta.
sin embargo, se le está aplicando la siguiente transformación a sus mensajes antes de mostrártelos:

1.- se invierten caracter por caracter "foo" -> "oof"
2.- luego se les hace un ascii shift n=6

te das cuenta de que estás tratando con un ascii shift por conocimiento previo de ctfs, notando la repetición regular de ciertos caracteres (particularmente notorio "&", que corresponde al espacio " "), o bien fijandote bien en el nombre del bot (es unicodeshiftsix shifteado por 1)
