import express from 'express'
import chalk from 'chalk'
import { port } from './config/config.js'
import connectDB from './config/db.js'

const app = express()
app.use(express.json())
connectDB();
const PORT = port || 3000
app.listen(PORT, () => console.log(`${chalk.yellow.bold('server is listing on')} ${PORT}`))
