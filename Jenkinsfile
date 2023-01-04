pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sudo docker built -t my-app .
            }
        }
    }
}