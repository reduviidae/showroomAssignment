import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { API_ROOT, HEADERS } from '../constants';


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
    const showList = this.state.shows.map(show => <li>{show.title}</li>)
    return (
      <ul>
        {showList}
      </ul>
    );
  }
}

export default Shows;
