pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
              checkout scm
            }
        }
        stage('Build') {
            steps {
                image = docker.build('my-app:$BUILD_NUMBER')
            }
        }
    }
}