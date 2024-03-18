FROM ubuntu:latest

ENV TZ=America/Santiago \
    DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y apache2 php

RUN rm /var/www/html/index.html
COPY src/index.php /var/www/html
COPY src/flag.txt /var/www/html
RUN chown -R root:root /var/www/html

CMD ["apache2ctl", "-D", "FOREGROUND"]
