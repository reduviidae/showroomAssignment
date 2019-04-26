import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavBar from "./Components/NavBar";
import Routes from "./Containers/Routes"

class App extends Component {
  state = {}
  render() {
    return (
      <Container>
        <NavBar />
        <Routes />
      </Container>
    );
  }
}

export default App;
