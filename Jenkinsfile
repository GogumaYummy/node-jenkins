pipeline {
    agent any

    stages {
        stage('Build') {
            node {
                checkout scm
                
                def customImage = docker.build("my-image:${env.BUILD_ID}")
            }
        }
    }
}