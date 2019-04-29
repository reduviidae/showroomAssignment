import React, { Component } from "react";

// Import constants
import { API_ROOT, HEADERS } from "../constants";

class Show extends Component {
  state = {
      show:{}
  }

  componentDidMount () {
    this.fetchShow();
  }

  render() {
    return <div>Show one show</div>;
  }
}

export default Show;
