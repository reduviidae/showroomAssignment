import React, { Component } from "react";
import capitalize from "lodash/capitalize";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class Show extends Component {
  state = {
    show: {}
  };

  componentDidMount() {
    this.fetchShow();
  }

  fetchShow = () => {
    fetch(`${API_ROOT}show/${this.props.match.params.id}`, {
      method: "GET",
      headers: HEADERS
    })
      .then(r => r.json())
      .then(show => this.setState({ show }));
  };

  render() {
    const show = () => {
      if (this.state.show.Genre) {
        return (
          <div className="showContainer">
            <div className="imgBox">
              <img
                width="100%"
                src={this.state.show.img_url}
                alt="show poster"
              />
            </div>
            <div className="text">
              <h1 className="showText">{this.state.show.title}</h1>
              <h2 className="showText">
                {capitalize(this.state.show.Genre.genre_name)}
              </h2>
            </div>
          </div>
        );
      } else {
        return (
          <div>
          "Error displaying show."
          </div>
        );
      }
    };
    return (
      <div>
      {show()}
      </div>
    );
  }
}

export default Show;
