require('dotenv').config()
const express = require('express')
const mainRouter = require('./routes/main')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')
const app = express()

//middlewares
app.use(express.static('./public'))
app.use(express.json())
//routes
app.use('/api/auth', mainRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => {
  console.log(`Server is listening on port 3000...`)
})
