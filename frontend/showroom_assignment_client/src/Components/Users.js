import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch(`${API_ROOT}users`, {
      method: "GET",
      headers: HEADERS
    })
      .then(r => r.json())
      .then(users => this.setState({ users }))
      .catch(err => {
        console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      });
  };

  render() {
    const userList = this.state.users.map(user => (
      <ListGroup.Item className="list">{user.username}</ListGroup.Item>
    ));
    return (
      <div className="listContainer">
        <h3>Welcome to, {this.props.user.username}!</h3>
        <h3>Your user number is: {this.props.user.id}.</h3>
        <h3>Master List of All Users:</h3>
        <ListGroup>{userList}</ListGroup>
      </div>
    );
  }
}

export default Users;
