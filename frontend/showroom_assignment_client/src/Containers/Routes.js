import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Import constants
import { API_ROOT, HEADERS, USERID } from "../constants";

// Import Components
import Main from "../Components/Main";
import Users from "../Components/Users";
import User from "../Components/User";
import PostShow from "../Components/PostShow";
import Shows from "../Components/Shows";
import Show from "../Components/Show";
import PostUser from "../Components/PostUser";

// Helpers to pass props through routes

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

class Routes extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch(`${API_ROOT}user/${USERID}`, {
      method: "GET",
      headers: HEADERS
    })
      .then(r => r.json())
      .then(user => this.setState({ user }))
      .catch(err => {
        console.log(`Error retrieving users: ${JSON.stringify(err)}`);
      });
  };

  render() {
    return (
      <Switch>
        <Route path="/signup" component={PostUser} />
        <PropsRoute path="/users" component={Users} user={this.state.user} />
        <PropsRoute
          path="/user/post"
          component={PostShow}
          user={this.state.user}
        />
        <PropsRoute path="/user/:id" component={User} user={this.state.user} />
        <Route path="/shows" component={Shows} />
        <Route path="/show/:id" component={Show} />
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default Routes;
