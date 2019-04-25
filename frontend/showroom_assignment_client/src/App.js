import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Container from "react-bootstrap/Container";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Container>
    <NavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
