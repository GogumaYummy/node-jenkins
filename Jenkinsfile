pipeline {
    agent any

    stages {
      
        def image;
        def DOCKER_REGISTRY_URI = 'https://registry.hub.docker.com'
        def IMAGE_NAME = 'my-app'

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:latest -t ${IMAGE_NAME}:${IMAGE_NAME} ."
            }
        }
        stage('Push') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login --password=${PASSWORD} --username=${USERNAME} ${DOCKER_REGISTRY_URI}"
                    sh "docker push -a ${IMAGE_NAME}"
                }
            }
        }
    }
}