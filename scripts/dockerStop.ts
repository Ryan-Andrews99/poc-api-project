import { exec } from 'child_process'

const dockerComposeDown = () =>
  exec('docker compose down', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    } else console.log(`stopping container stdout: ${stdout}`)
  })

dockerComposeDown()
