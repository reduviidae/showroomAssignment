import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { API_ROOT, HEADERS } from '../constants';


class Users extends Component {
  state ={
    users: []
  }
  componentDidMount () {
    this.fetchUsers()
  };

  fetchUsers = () => {
    fetch(`${API_ROOT}users`, {
      method: 'GET',
      headers: HEADERS
    })
      .then(r => r.json())
      .then(users => this.setState({ users }))
      .catch(err => {
        console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      })
  }

  render () {
    const userList = this.state.users.map(user => <li>{user.username}</li>)
    return (
      <ul>
        {userList}
      </ul>
    );
  }
}

export default Users;
