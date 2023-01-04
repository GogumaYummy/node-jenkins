node {
    def image;

    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        image = docker.build("my-app")
    }
    stage('Push') {
        docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
            image.push("${env.BUILD_ID}")
        }
    }
}