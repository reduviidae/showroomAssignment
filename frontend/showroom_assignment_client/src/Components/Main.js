import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

function Main() {
  return (
    <div className="container">
      <Jumbotron>
        <h2>Welcome to the TV Show Watchlist App!</h2>
      </Jumbotron>
    </div>
  );
}

export default Main;
