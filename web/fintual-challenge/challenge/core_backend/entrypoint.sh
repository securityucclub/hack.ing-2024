#!/bin/bash
echo "initializing django migration"
python manage.py migrate
echo "django migration finished"
gunicorn core_backend.wsgi --bind 0.0.0.0:8000
