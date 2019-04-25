const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => res.send('HELLO WORLD'));

// Users Routes //
app.get('/api/v1/users', (req, res) => {
  return db.Users.findAll()
    .then(users => res.send(users))
    .catch(err => {
      console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.get('/api/v1/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  return db.Users.findByPk(id)
    .then(user => res.send(user))
    .catch(err => {
      console.log(`Error retrieving user #${id}: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.post('/api/v1/user', (req, res) => {
  // CREATE NEW USER
});

// Genres Route //
app.get('/api/v1/genres', (req, res) => {
  return db.Genres.findAll()
    .then(genres => res.send(genres))
    .catch(err => {
      console.log(`Error retrieving genres: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.get('/api/v1/genre/:id', (req, res) => {
  const id = req.params.id
  return db.Genres.findByPk(id)
    .then(genre => res.send(genre))
    .catch(err => {
      console.log(`Error retrieving genre #${id}: ${JSON.stringify(err)}`);
      return res.send(err);
    })
});

// Shows Routes //
app.get('/api/v1/shows', (req, res) => {
  return db.Shows.findAll()
    .then(shows => res.send(shows))
    .catch(err => {
      console.log(`Error retrieving shows: ${JSON.stringify(err)}`);
      return res.send(err)
    })
});

app.get('/api/v1/genre/:id/shows', (req, res) => {
  const genre_id = parseInt(req.params.id);


});

app.get('/api/v1/shows/user/:id', (req, res) => {
  const user_id = parseInt(req.params.id);
  // RETRIEVE ALL SHOWS FOR A GIVEN USER
});

app.get('/api/v1/show/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // RETRIEVE ONE SHOW
});

app.post('/api/v1/show', (req, res) => {
  // CREATE NEW SHOW
});

// Comments Routes //
app.get('/api/v1/show/comments/:id', (req, res) => {
  const show_id = parseInt(req.params.id);
  // RETRIEVE ALL COMMENTS FOR A GIVEN SHOW
});

app.post('/api/v1/show/comment/:id', (req, res) => {
  const show_id = parseInt(req.params.id);
  // CREATE NEW COMMENT
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
