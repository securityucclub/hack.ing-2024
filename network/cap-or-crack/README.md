# Nombre: `Cap or crack`
### Dificultad: `Moderate (🃏🃏🃏)`
### Categoría: `network`
### Autor: [0wulf](https://0wulf.github.io/)
### Flag: `hack.ing{wireshark}`
### Descripción:
¿Podrás obtener la clave del handshake en `eapol.cap`? 
Puedes usar la herramienta `aircrack-ng` y el diccionario `wpa-top4800.txt` que te entregamos.
La flag corresponde a `hack.ing{<passphrase>}`

### Hint
...

### Solución propuesta:
```bash
$ aircrack-ng -w wpa-top4800.txt eapol.pcap
```

### Fuente
[Packet capture recuperado de SampleCaptures de wireshark.com](https://wiki.wireshark.org/uploads/0ad8934c433f71607d8dc9c3b7a14718/wpa2linkuppassphraseiswireshark.pcap)
