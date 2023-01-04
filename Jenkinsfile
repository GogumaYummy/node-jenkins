pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                
                docker built -t my-app .
            }
        }
        stage('Build') {
            steps {
                echo 'okay'
            }
        }
    }
}