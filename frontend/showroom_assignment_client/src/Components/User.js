import React, { Component } from "react";
import capitalize from "lodash/capitalize";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class User extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    this.fetchShows();
  }

  fetchShows = () => {
    fetch(`${API_ROOT}user/${this.props.match.params.id}/shows`, {
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
    console.log(this.props.match.params.id);
    const shows = this.state.shows.map(show => {
      return (
        <div className="userShow">
          <div className="imgBox">
            <img width="100%" src={show.img_url} alt="show poster" />
          </div>
          <div className="text">
            <h1 className="showText">{show.title}</h1>
            <h2 className="showText">{capitalize(show.Genre.genre_name)}</h2>
          </div>
        </div>
      );
    });
    return (
      <div className="userContainer">
    {shows}
    <br/>
    {parseInt(this.props.match.params.id) === 10 && <a href="/user/post">Add a show</a>}
    </div>
  );
  }
}

export default User;
