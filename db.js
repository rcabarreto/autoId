const Sequelize = require('sequelize')

const dbconfig = {
  logging: false,
  dialect: 'sqlite',
  storage: './data/database.sqlite',
  dialectOptions: {
    decimalNumbers: true,
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
}

const sequelize = new Sequelize(undefined, undefined, undefined, dbconfig)

const db = {}

// IMPORTS FOR ALL MODELS
db.user = sequelize.import(`${__dirname}/models/user.js`)
db.token = sequelize.import(`${__dirname}/models/token.js`)
db.sequence = sequelize.import(`${__dirname}/models/sequence.js`)

// STARTUP
db.sequelize = sequelize
db.Sequelize = Sequelize

// RELATIONSHIPS
db.sequence.belongsTo(db.user)
db.user.hasMany(db.sequence)

module.exports = db
