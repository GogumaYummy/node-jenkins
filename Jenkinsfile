node {
    def image;
    def DOCKER_REGISTRY_URI = 'registry.hub.docker.com'

    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        image = docker.build("my-app")
    }
    stage('Push') {
        withDockerRegistry([ credentialsId: "DockerHub", url: "https://registry.hub.docker.com" ]) {
            image.push('latest')
        }
        // withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        //     sh "docker login --password=${PASSWORD} --username=${USERNAME} ${DOCKER_REGISTRY_URI}"
        //     // image.push("${env.BUILD_ID}")
        //     image.push('latest')
        // }
    }
}