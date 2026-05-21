pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "attendance-system:latest"
        PORT = "5000"
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/SuhasRaj-21/dev-ops.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Checking requirements...'
                sh 'pip install -r requirements.txt'
            }
        }
        
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // Add test commands here e.g. pytest
                echo 'Tests passed.'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker Image...'
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }
        
        stage('Deploy Container') {
            steps {
                echo 'Deploying application...'
                // Stopping existing container if exists
                sh "docker rm -f attendance-app || true"
                // Running new container
                sh "docker run -d -p ${PORT}:${PORT} --name attendance-app ${DOCKER_IMAGE}"
                echo "App deployed successfully on port ${PORT}!"
            }
        }
    }
}
