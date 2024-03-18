FROM ubuntu:latest

ENV TZ=America/Santiago \
    DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y python3

COPY secret.py /root/secret.py
COPY server.py /root/server.py

CMD ["python3", "/root/server.py"]