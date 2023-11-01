import { EnvironmentVariable } from './types/EnvironmentVariable'
import 'dotenv/config'

export const getEnv = (name: EnvironmentVariable) => {
  const env = process.env[name]

  if (env === undefined || env === null)
    throw Error(`Missing environment variable: ${name}`)

  return env
}
