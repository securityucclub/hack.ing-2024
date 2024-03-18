FROM python:3
ENV PYTHONUNBUFFERED 1


ARG DJANGO_SETTINGS_MODULE
ENV DJANGO_SETTINGS_MODULE $DJANGO_SETTINGS_MODULE

WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
ENTRYPOINT ["./entrypoint.sh"]

COPY . .
