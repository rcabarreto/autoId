
let Sequelize = require('sequelize');
let sequelize;

let dbconfig = {
  logging: false,
  dialect: 'sqlite',
  storage: './data/database.sqlite',
  dialectOptions: { 
    decimalNumbers: true,
    supportBigNumbers: true,
    bigNumberStrings: true
  }
};

if(process.env.NODE_ENV === 'development')
  dbconfig.logging = console.log;

sequelize = new Sequelize(undefined, undefined, undefined, dbconfig);

sequelize.authenticate().then(err => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.log('Unable to connect to the database:', err);
});


let db = {};

// IMPORTS FOR ALL MODELS
db.user = sequelize.import(__dirname + '/models/user.js');
db.token = sequelize.import(__dirname + '/models/token.js');
db.sequence = sequelize.import (__dirname + '/models/sequence.js');

// STARTUP
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// RELATIONSHIPS
db.sequence.belongsTo(db.user);
db.user.hasMany(db.sequence);

// Category and navigation class self relationship
// db.category.belongsTo(db.category, { as: 'parentCategory', foreignKey: 'parentId' });
// db.category.hasMany(db.category, { as: 'subCategory', foreignKey: 'parentId' });

module.exports = db;