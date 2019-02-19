const express = require('express')
const _ = require('lodash')

module.exports = (db, middleware) => {
  const userApiRoutes = require('./user.js')(db, middleware)
  const sequenceApiRoutes = require('./sequence.js')(db, middleware)

  const router = express.Router()

  router.use('/user', userApiRoutes)
  router.use('/sequence', sequenceApiRoutes)

  return router
}
