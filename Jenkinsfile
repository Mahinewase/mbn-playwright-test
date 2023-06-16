pipeline {
  agent any
  
  stages {
     stage('Maven Build') {  
      steps {  
                sh 'mvn clean install'  
            }  
     }
     stage('Maven Test') {
            steps {
                sh 'mvn test'
            }
     }
     stage('Maven Package') {
            steps {
                sh 'mvn package'  
            }
     }  
     stage('Build') {  
      steps {  
        sh 'make build'  
      } 
    }
    stage('test') {  
      steps {  
        sh 'npx playwright test --list'  
      }
      steps {  
        sh 'npx playwright test'  
      }
    } 
  }
}
