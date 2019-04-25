import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Container from "react-bootstrap/Container";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import User from "./Components/User";
import PostShow from "./Components/PostShow";
import Shows from "./Components/Shows";
import Show from "./Components/Show";


function App() {
  return (
    <Container>
    <NavBar />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={User} />
        <Route path="/user/post" component={PostShow} />
        <Route path="/shows" component={Shows} />
        <Route path="/show/:id" component={Show} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
