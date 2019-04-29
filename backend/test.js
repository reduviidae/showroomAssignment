const db = require('./models');

// db.Shows.findByPk(52)
//   .then(show => show.destroy())

db.Shows.findOne({
  where: {
    "$Shows.title$": "Good Dog"
  }})
  .then(console.log)
