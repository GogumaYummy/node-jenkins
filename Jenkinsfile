pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm install -g jest'
                sh 'jest'
            }
        }
        stage('Transpile') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker build -t ${USERNAME}/${JOB_NAME}:latest -t ${USERNAME}/${JOB_NAME}:${env.BUILD_NUMBER} ."
                }
            }
        }
        stage('Push') {
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login --password=${PASSWORD} --username=${USERNAME}"
                    sh "docker push ${USERNAME}/${JOB_NAME}:${env.BUILD_NUMBER}"
                    sh "docker push ${USERNAME}/${JOB_NAME}:latest"
                }
            }
        }
    }
}