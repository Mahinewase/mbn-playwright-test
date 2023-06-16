pipeline {
  agent any
  stages {
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('Build') {
      steps {
        sh 'make build'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}
