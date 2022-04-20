import express from 'express'
import dotenv from 'dotenv'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
  res.send('oke')
})

app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`))