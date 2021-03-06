import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER
const dbPassword = process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

export default sequelizeConnection;