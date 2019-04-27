import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class PostUser extends Component {
  state = {
    username: ""
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
              return (
                <div className="errorMessage">
                  {err.message}
                </div>
              )
            })
          }
        });
  };

  render() {
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
          onClick={this.submitUser}>
          Create new user
        </Button>
      </Form>
    );
  }
}

export default PostUser;
