#!/bin/bash
RUN_PORT="9000"

/opt/venv/bin/python manage.py makemigrations --no-input
/opt/venv/bin/python manage.py migrate --no-input
/opt/venv/bin/gunicorn backend.wsgi:application --bind "0.0.0.0:${RUN_PORT}" --daemon

nginx -g 'daemon off;'