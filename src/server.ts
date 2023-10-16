import app from './app'
import * as config from './config'

app
  .listen(config.PORT, () => {
    console.info(`Server listening on port ${config.PORT}`)
  })
  .on('error', (error: Error) => {
    console.error(`Unable to start server because of ${error.message}`)
  })
