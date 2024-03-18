# Use official Python image as base image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy the Python script and flag file into the container
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose the port the server runs on
EXPOSE 8888

# Run the server
CMD ["python", "server.py"]
