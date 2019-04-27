const db = require('./models');

db.Users.findByPk(22)
  .then(user => user.destroy())
