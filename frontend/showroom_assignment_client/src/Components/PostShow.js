import React, { Component } from "react";
import Form from "react-bootstrap/Form";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class PostShow extends Component {
  state = {
    title: "",
    img_url: "",
    selectedGenre: 0,
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
      .catch(err =>
        console.log(`Error retrieving genres on client: ${JSON.stringify(err)}`)
      );
  };

  render() {
    const genreList = this.state.genres.map(genre => (
      <option>{genre.genre_name}</option>
    ));
    return (
      <Form>
        <Form.Group>
          <Form.Control className="showForm" type="text" placeholder="Title Text Input" /><br/>
          <Form.Control className="showForm" type="text" placeholder="Image URL Text Input" /><br/>
          <Form.Control className="showForm" as="select">
          <option value="" disabled selected>Genre Selection Dropdown</option>
          {genreList}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default PostShow;
