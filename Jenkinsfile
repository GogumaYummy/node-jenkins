node {
    def image;
    def DOCKER_REGISTRY_URI = 'https://registry.hub.docker.com'
    def IMAGE_NAME = 'my-app'

    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        image = docker.build("${IMAGE_NAME}")
    }
    stage('Push') {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
            sh "docker login --password=${PASSWORD} --username=${USERNAME} ${DOCKER_REGISTRY_URI}"
            // image.push("${env.BUILD_ID}")
            sh "docker push ${IMAGE_NAME}/latest"
        }
    }
}