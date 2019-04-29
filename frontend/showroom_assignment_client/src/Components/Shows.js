import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../constants';
import ListGroup from "react-bootstrap/ListGroup";

class Shows extends Component {
  state ={
    shows: []
  }
  componentDidMount () {
    this.fetchShows()
  };

  fetchShows = () => {
    fetch(`${API_ROOT}shows`, {
      method: 'GET',
      headers: HEADERS
    })
      .then(r => r.json())
      .then(shows => this.setState({ shows }))
      .catch(err => {
        console.log(`Error retrieving shows: ${JSON.stringify(err)}`);
      })
  }

  render () {
    const showList = this.state.shows.map(show => <ListGroup.Item className="list">
    <a href={`/show/${show.id}`}>{show.title}</a>
    </ListGroup.Item>)
    return (
      <div className="listContainer">
      <h3>Master List of All Shows:</h3>
        {showList}
      </div>
    );
  }
}

export default Shows;
