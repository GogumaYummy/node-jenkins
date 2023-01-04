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
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker build -t ${JOB_NAME}:latest -t ${JOB_NAME}:${env.BUILD_NUMBER} ."
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login --password=${PASSWORD} --username=${USERNAME}"
                    sh "docker push ${JOB_NAME}:latest"
                    sh "docker push ${JOB_NAME}:${env.BUILD_NUMBER}"
                }
            }
        }
    }
}