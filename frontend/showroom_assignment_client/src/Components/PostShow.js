import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import capitalize from "lodash/capitalize";
import Redirect from "react-router-dom/Redirect";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class PostShow extends Component {
  state = {
    title: "",
    img_url: "",
    genre_id: 0,
    genres: [],
    redirect: false,
    newShow: 0,
    errorArray: []
  };

  componentDidMount() {
    this.fetchGenres();
  }

  redirect = r => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/show/${this.state.newShow}`} />;
    }
  };

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

  newShow = r => {
    this.setState({ newShow: r.id });
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
      .then(r => {
        if (r.errors) {
          r.errors.map(err => {
            const errorArray = [];
            errorArray.push(err.message);
            return this.setState({ errorArray });
          });
        } else {
          this.newShow(r);
          this.redirect();
        }
      });
  };

  render() {
    const genreList = this.state.genres.map(genre => (
      <option key={genre.id} value={genre.id}>
        {capitalize(genre.genre_name)}
      </option>
    ));
    return (
      <Form>
      {this.renderRedirect()}
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
          onClick={this.submitShow}
        >
          Post new show for user id: {this.props.user.id}
        </Button>
      </Form>
    );
  }
}

export default PostShow;
