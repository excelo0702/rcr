import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import {firebase_var} from '../../config/firebaseConfig'

class NavbarComponent extends Component{


  handleLogout= ()=>{
    firebase_var.auth().signOut();
  }

  render(){
    return (
      <ReactBootstrap.Navbar bg="dark" expand="lg" variant='pills'>
        <ReactBootstrap.Navbar.Brand href="/home">
          RCR
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
  
        
  
          <ReactBootstrap.Nav className="mr-auto m-3" >
            <NavLink to="/home" className="m-1 p-1 text-white">Home</NavLink>
            <NavLink to="/findComponents" className="m-1 p-1 text-white">Find Components</NavLink>
            <NavLink to="/insert" className="m-1 p-1 text-white">Insert</NavLink>
            
          </ReactBootstrap.Nav>
          <button onClick={this.handleLogout}>Logout</button>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
} 

export default NavbarComponent;
