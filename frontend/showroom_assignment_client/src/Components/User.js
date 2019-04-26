import React, { Component } from "react";
import { API_ROOT, HEADERS, USERID } from "../constants";

class User extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    this.fetchShows();
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
    const shows = this.state.shows.map(show => {
      return (
        <div className="userShow">
          <div className="imgBox">
            <img width="100%" src={show.img_url} alt="show poster" />
          </div>
          <h2>{show.title}</h2>
        </div>
      );
    });
    return (
      <div>
        {this.props.user.username}
        {shows}
      </div>
    );
  }
}

export default User;
