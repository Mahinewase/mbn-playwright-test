pipeline {
  agent any
  
  stages {
    stage('Maven Build') {
      steps {
        bat 'mvn clean install'
      }
    }
    stage('Maven Test') {
      steps {
        bat 'mvn test'
      }
    }
    stage('Maven Package') {
      steps {
        bat 'mvn clean package'
      }
    }
    stage('Build') {
      steps {
        bat 'make build'
      }
    }
    stage('Test') {
      steps {
        bat 'npx playwright test --list'
        bat 'npx playwright test'
      }
    }
  }
}
