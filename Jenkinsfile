pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'docker build -t my-app .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run -d my-app:latest'
            }
        }
    }
}