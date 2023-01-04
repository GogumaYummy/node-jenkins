pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    def customImage = docker.build("my-image:${env.BUILD_ID}")
                }
            }
        }
        stage('Build') {
            steps {
                echo 'okay'
            }
        }
    }
}