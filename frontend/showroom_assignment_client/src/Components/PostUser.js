import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Redirect from "react-router-dom/Redirect";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class PostUser extends Component {
  state = {
    username: "",
    errorArray: [],
    redirect: false,
    newUser: 0
  };

  usernameOnChange = e => {
    this.setState({ username: e.target.value });
  };

  redirect = r => {
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/user/${this.state.newUser}`} />
    }
  }

  newUser = r => {
    this.setState({ newUser: r.id })
  }

  submitUser = e => {
    e.preventDefault();
    fetch(`${API_ROOT}user`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        username: this.state.username
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
          this.newUser(r)
          this.redirect()
        }
      });
  };

  render() {
    const errors = this.state.errorArray.map(error => <div className="error">{error}</div>)
    return (
      <Form>
      {this.renderRedirect()}
        <Form.Group>
          <Form.Control
            className="userForm"
            type="text"
            placeholder="Enter Username"
            onChange={this.usernameOnChange}
          />
          <br />
        </Form.Group>

        <Button
          className="submitButton"
          type="submit"
          onClick={this.submitUser}
        >
          Create new user
        </Button>
        {errors}
      </Form>
    );
  }
}

export default PostUser;
