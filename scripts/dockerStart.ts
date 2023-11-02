import { exec } from 'child_process'

const dockerComposeUp = () =>
  exec('docker compose up', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    } else console.log(`stdout: ${stdout}`)
  })

dockerComposeUp()
