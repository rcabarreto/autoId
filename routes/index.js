const express = require('express')
const path = require('path')

const router = express.Router()

/* GET hoem template page. */
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

module.exports = router
