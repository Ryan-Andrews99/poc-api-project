import { Sequelize } from 'sequelize'
import { getEnv } from '../../utils/getEnv'

const [dbHost, dbUser, dbPassword, dbName, dbPort] = [
  getEnv('POSTGRES_HOST'),
  getEnv('POSTGRES_USER'),
  getEnv('POSTGRES_PASSWORD'),
  getEnv('POSTGRES_DB'),
  Number(getEnv('POSTGRES_PORT'))
]

export const dbClient = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'postgres'
})
