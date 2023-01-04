node {
    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        def image = docker.build("my-app:${env.BUILD_ID}")
    }
    stage('Push') {
        image.push('latest')
    }
}