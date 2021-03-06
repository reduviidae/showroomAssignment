const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import DB models
const db = require("./models");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => res.send("HELLO WORLD"));

// Comments Routes //
app.get("/api/v1/show/:id/comments", (req, res) => {
  const show_id = parseInt(req.params.id);
  return db.Shows.findByPk(show_id)
    .then(show =>
      show.getComments({
        include: [
          {
            model: db.Users,
            as: "User"
          }
        ]
      })
    )
    .then(comments => res.send(comments))
    .catch(err => {
      console.log(
        `Error retrieving comments for show #${show_id}: ${JSON.stringify(err)}`
      );
      return res.send(err);
    });
});

app.get("/api/v1/user/:id/comments", (req, res) => {
  const user_id = parseInt(req.params.id);
  return db.Users.findByPk(user_id)
    .then(user => user.getComments({
      include: [
        {
          model: db.Shows,
          as: "Show"
        }
      ]
    }))
    .then(comments => res.send(comments))
    .catch(err => {
      console.log(
        `Error retrieving comments for user #${user_id}: ${JSON.stringify(err)}`
      );
      return res.send(err);
    });
});

app.post("/api/v1/comment", (req, res) => {
  const { user_id, show_id, comment_body } = req.body;
  return db.Comments.create({ show_id, user_id, comment_body })
    .then(comment => res.send(comment))
    .catch(err => {
      console.log(
        `Error creating new comment for user #${user_id} and show #${show_id}: ${JSON.stringify(
          err
        )}`
      );
      return res.send(err);
    });
});

// Users Routes //
app.get("/api/v1/users", (req, res) => {
  return db.Users.findAll()
    .then(users => res.send(users))
    .catch(err => {
      console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.get("/api/v1/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Users.findByPk(id)
    .then(user => res.send(user))
    .catch(err => {
      console.log(`Error retrieving user #${id}: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.post("/api/v1/user", (req, res) => {
  const { username } = req.body;
  return db.Users.create({ username })
    .then(user => res.send(user))
    .catch(err => {
      console.log(`Error creating a new user: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

// Genres Route //
app.get("/api/v1/genres", (req, res) => {
  return db.Genres.findAll()
    .then(genres => res.send(genres))
    .catch(err => {
      console.log(`Error retrieving genres: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.get("/api/v1/genre/:id", (req, res) => {
  const id = req.params.id;
  return db.Genres.findByPk(id)
    .then(genre => res.send(genre))
    .catch(err => {
      console.log(`Error retrieving genre #${id}: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

// Shows Routes //
app.get("/api/v1/shows", (req, res) => {
  return db.Shows.findAll({
    include: [
      {
        model: db.Genres,
        as: "Genre"
      }
    ]
  })
    .then(shows => res.send(shows))
    .catch(err => {
      console.log(`Error retrieving shows: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.get("/api/v1/genre/:id/shows", (req, res) => {
  const genre_id = parseInt(req.params.id);
  return db.Genres.findByPk(genre_id)
    .then(genre =>
      genre.getShows({
        include: [
          {
            model: db.Genres,
            as: "Genre"
          }
        ]
      })
    )
    .then(shows => res.send(shows))
    .catch(err => {
      console.log(
        `Error retrieving shows for genre #${genre_id}: ${JSON.stringify(err)}`
      );
      return res.send(err);
    });
});

app.get("/api/v1/user/:id/shows", (req, res) => {
  const user_id = parseInt(req.params.id);
  return db.Users.findByPk(user_id)
    .then(user =>
      user.getShows({
        include: [
          {
            model: db.Genres,
            as: "Genre"
          }
        ]
      })
    )
    .then(shows => res.send(shows))
    .catch(err => {
      console.log(
        `Error retrieving shows for user #${user_id}: ${JSON.stringify(err)}`
      );
      return res.send(err);
    });
});

app.get("/api/v1/show/:id", (req, res) => {
  const id = parseInt(req.params.id);
  return db.Shows.findOne({
    where: {
      "$Shows.id$": id
    },
    include: [
      {
        model: db.Comments,
        as: "Comments",
        include: [{
          model: db.Users,
          as: "User"
        }]
      },
      {
        model: db.Genres,
        as: "Genre"
      },
      {
        model: db.Users,
        as: "User"
      }
    ]
  })
    .then(show => res.send(show))
    .catch(err => {
      console.log(`Error retrieving show #${id}: ${JSON.stringify(err)}`);
      return res.send(err);
    });
});

app.post("/api/v1/show", (req, res) => {
  const { title, img_url, genre_id, user_id } = req.body;
  return db.Shows.create({ title, img_url, genre_id, user_id })
    .then(show => res.send(show))
    .catch(err => {
      console.log(
        `There was an error creating a show for user #${user_id}: ${JSON.stringify(
          err
        )}`
      );
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
