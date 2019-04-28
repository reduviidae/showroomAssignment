const db = require('./models');

db.Users.findByPk(23)
  .then(user => user.destroy())
