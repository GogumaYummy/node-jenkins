pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'sudo docker built -t my-app .'
            }
        }
    }
}