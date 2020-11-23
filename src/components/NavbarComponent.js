import React from 'react';
import * as ReactBootstrap from 'react-bootstrap'

function NavbarComponent(){
    return(
        <ReactBootstrap.Navbar bg="light" expand="lg">
  <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#link">Find Components</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link href="#insert">Insert</ReactBootstrap.Nav.Link>
      
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav.Link href="#login">Login</ReactBootstrap.Nav.Link>

  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    );
    
}

export default NavbarComponent;