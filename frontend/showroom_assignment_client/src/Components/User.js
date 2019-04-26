import React, { Component } from "react";
import { API_ROOT, HEADERS, USERID } from "../constants";

class User extends Component {
  state = {
    shows: []
  };

  componentDidMount () {
    this.fetchShows()
  }

  fetchShows = () => {
    fetch(`${API_ROOT}user/${USERID}/shows`, {
      method: "GET",
      headers: HEADERS
    })
      .then(r => r.json())
      .then(shows => this.setState({ shows }))
      .catch(err => {
        console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      });
  };

  render() {
    const shows = this.state.shows.map(show => <li>{show.title}</li>)
    return (
      <div>
        {this.props.user.username}
        {shows}
      </div>
    );
  }
}

export default User;
