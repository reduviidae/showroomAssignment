import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
      <Navbar className="navBar" fill activeKey="/">
        <Navbar.Brand id="brand" href="/">TV Show Watchlist</Navbar.Brand>
        <ul className="navItem">
          <li>
            <Nav.Link href="/">Home</Nav.Link> - &nbsp;
          </li>
          <li>
            <Nav.Link href="/users">Users</Nav.Link> - &nbsp;
          </li>
          <li>
            <Nav.Link href="/shows">TV Shows</Nav.Link> - &nbsp;
          </li>
          <li>
            <Nav.Link href="/genres">Genres</Nav.Link>
          </li>
        </ul>
      </Navbar>
  );
}

export default NavBar;
