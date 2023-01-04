pipeline {
    agent any
    environment { 
        DOCKER_REGISTRY_URI = 'https://registry.hub.docker.com'
        IMAGE_NAME = 'my-app'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker build -t ${USERNAME}/${IMAGE_NAME}:latest -t ${USERNAME}/${IMAGE_NAME}:${env.BUILD_NUMBER} ."
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh '''echo "${PASSWORD} | docker login -u${USERNAME} --password=stdin" '''
                    sh "echo ${USERNAME}/${IMAGE_NAME}"
                    sh "docker push ${USERNAME}/${IMAGE_NAME}"
                }
            }
        }
    }
}