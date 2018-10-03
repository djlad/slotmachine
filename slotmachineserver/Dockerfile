FROM python:3.7-alpine3.7
WORKDIR /code
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
EXPOSE 8000