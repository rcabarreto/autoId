require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const bearerToken = require('express-bearer-token')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

const db = require('./db.js')
const middleware = require('./middleware.js')(db)
const appRoutes = require('./routes/index')
const apiRoutes = require('./routes/api')(db, middleware)

const app = express()

// configure headers
app.use(helmet())

app.disable('x-powered-by')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bearerToken())

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  exposedHeaders: 'auth',
}

app.options('*', cors(corsOptions))

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/api', cors(corsOptions), apiRoutes)
app.use('/', appRoutes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send()
})

// sync the database
db.sequelize.sync().then(() => {
  // {force:true}
})

module.exports = app
