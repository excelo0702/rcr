import React from "react";
import { NavLink } from "react-router-dom";

import * as ReactBootstrap from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <ReactBootstrap.Navbar bg="light" expand="lg">
      <ReactBootstrap.Navbar.Brand href="/home">
        React-Bootstrap
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
          {/* <ReactBootstrap.Nav.Link to="/home">Home</ReactBootstrap.Nav.Link> */}
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/findComponents">Find Components</NavLink>
          {/* <ReactBootstrap.Nav.Link href="#link">
            Find Components
          </ReactBootstrap.Nav.Link> */}
          <NavLink to="/insert">Insert</NavLink>
          {/* <ReactBootstrap.Nav.Link to="/insert">Insert</ReactBootstrap.Nav.Link> */}
        </ReactBootstrap.Nav>
        <ReactBootstrap.Nav.Link href="#login">Login</ReactBootstrap.Nav.Link>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
};

export default NavbarComponent;
