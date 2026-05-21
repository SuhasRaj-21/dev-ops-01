pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-project"
        CONTAINER_NAME = "devops-container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/SuhasRaj-21/dev-ops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing requirements...'
                bat 'pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'python app.py'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying Docker container...'

                bat 'docker stop %CONTAINER_NAME% || exit 0'
                bat 'docker rm %CONTAINER_NAME% || exit 0'

                bat 'docker run -d -p 5000:5000 --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }
    }
}
