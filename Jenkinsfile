node {
    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        image = docker.build('my-app:$BUILD_NUMBER')
    }
}