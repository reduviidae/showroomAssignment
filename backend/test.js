const db = require('./models');

db.Shows.findAll()
  .then(console.log)

// db.Shows.findOne({
//   where: {
//     "$Shows.title$": "Good Dog"
//   }})
//   .then(console.log)
