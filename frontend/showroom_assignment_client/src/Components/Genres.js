import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class Users extends Component {
  state = {
    genres: []
  };
  componentDidMount() {
    this.fetchGenres();
  }

  fetchGenres = () => {
    fetch(`${API_ROOT}genres`, {
      method: "GET",
      headers: HEADERS
    })
      .then(r => r.json())
      .then(genres => this.setState({ genres }))
      .catch(err => {
        console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      });
  };

  render() {
    const genreList = this.state.genres.map(genre => (
      <ListGroup.Item onClick={this.redirect} className="list">
        {genre.genre_name}
      </ListGroup.Item>
    ));
    return (
      <div className="listContainer">
        <h3>Master List of All Genres:</h3>
        <ListGroup>{genreList}</ListGroup>
      </div>
    );
  }
}

export default Users;
