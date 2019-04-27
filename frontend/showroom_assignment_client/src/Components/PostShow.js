import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import capitalize from "lodash/capitalize";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class PostShow extends Component {
  state = {
    title: "",
    img_url: "",
    genre_id: 0,
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

  titleOnChange = e => {
    this.setState({ title: e.target.value });
  };

  imgUrlOnChange = e => {
    this.setState({ img_url: e.target.value });
  };

  genreOnSelect = e => {
    this.setState({ genre_id: parseInt(e.target.value) });
  };

  submitShow = e => {
    e.preventDefault();
    fetch(`${API_ROOT}show`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        title: this.state.title,
        img_url: this.state.img_url,
        genre_id: this.state.genre_id,
        user_id: this.props.user.id
      })
    })
      .then(r => r.json())
      .then(console.log);
  };

  render() {
    const genreList = this.state.genres.map(genre => (
      <option key={genre.id} value={genre.id}>
        {capitalize(genre.genre_name)}
      </option>
    ));
    return (
      <Form>
        <Form.Group>
          <Form.Control
            className="showForm"
            type="text"
            placeholder="Title Text Input"
            onChange={this.titleOnChange}
          />
          <br />
          <Form.Control
            className="showForm"
            type="text"
            placeholder="Image URL Text Input"
            onChange={this.imgUrlOnChange}
          />
          <br />
          <Form.Control
            className="showForm"
            as="select"
            onChange={this.genreOnSelect}
          >
            <option value="" disabled selected>
              Genre Selection Dropdown
            </option>
            {genreList}
          </Form.Control>
        </Form.Group>

        <Button
          className="submitButton"
          type="submit"
          onClick={this.submitShow}>
          Post new show for user id: {this.props.user.id}
        </Button>
      </Form>
    );
  }
}

export default PostShow;
