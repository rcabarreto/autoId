const cryptojs = require('crypto-js')

module.exports = db => ({
  requireAuthentication(req, res, next) {
    const token = req.token || req.get('Auth') || ''
    db.token.findOne({
      where: { tokenHash: cryptojs.MD5(token).toString() },
    }).then((tokenInstance) => {
      if (!tokenInstance) throw new Error()
      req.token = tokenInstance
      return db.user.findByToken(token)
    }).then((user) => {
      req.user = user
      next()
      return false
    }).catch(() => {
      res.status(401).send()
    })
  },
})
