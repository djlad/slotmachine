FROM python:3.7-alpine3.7
WORKDIR /code
COPY . .
RUN apk add --no-cache --virtual .pynacl_deps build-base python3-dev libffi-dev
RUN apk add libressl-dev
RUN apk add postgresql-dev
RUN apk add postgresql-client
RUN chmod 777 start.bat
RUN pip install -r requirements.txt
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
EXPOSE 8000