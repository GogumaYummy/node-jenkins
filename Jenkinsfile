node {
    def image;

    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        image = docker.build("my-app:${env.BUILD_ID}")
    }
    stage('Push') {
        image.push('latest')
    }
}