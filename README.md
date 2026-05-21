# Student Attendance Management System

A complete web-based Student Attendance Management System built with Flask, SQLite, HTML, CSS, Bootstrap, and JavaScript. The project also includes a Dockerfile and Jenkinsfile for CI/CD deployments.

## Features

- **Admin Login**: Secure login for administrators.
- **Dashboard Overview**: A modern UI reporting stats like Total Students, Present Today, and Absent Today with animated numbers and charts.
- **Manage Students**: Add, Edit, Delete students with their USN and Department information.
- **Mark Attendance**: Interactive date selection to mark students 'Present' or 'Absent'.
- **Attendance Reports**: View individual student attendance percentage.
- **Export CSV**: Export attendance records to a CSV file.

## Tech Stack

- **Backend**: Python, Flask
- **Database**: SQLite
- **Frontend**: HTML5, Vanilla CSS, Bootstrap 5, Vanilla JS, FontAwesome, Chart.js

## Run Locally

```bash
# 1. Provide an environment
pip install -r requirements.txt

# 2. Run the application
python app.py
```
This application will start a web server running on port `5000`. And visit `http://localhost:5000`.

**Demo Credentials:**
- Username: `admin`
- Password: `admin123`

## Run with Docker

```bash
docker build -t attendance .
docker run -p 5000:5000 attendance
```
