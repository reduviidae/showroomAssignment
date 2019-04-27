import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class PostUser extends Component {
  state = {
    username: "",
    errorArray: []
  };

  usernameOnChange = e => {
    this.setState({ title: e.target.value });
  };

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
            this.setState({ errorArray });
          });
        }
      });
  };

  render() {
    const errors = this.state.errorArray.map(error => <div className="error">{error}</div>)
    return (
      <Form>
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
