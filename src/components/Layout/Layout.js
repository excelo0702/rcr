import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Auxx from "../hoc/Auxx";
import Home from "../Home/Home";
import Insert from "../Insert/Insert";
import FindComponents from "../FindComponents/FindComponents";
import {firebase_var} from "../../config/firebaseConfig";
import Login from '../Authentication/Login'
import NavbarComponent from './NavbarComponent'

class Layout extends Component {

  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    firebase_var.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }


  render() {
    return (
      <Auxx>
        {this.state.user?<NavbarComponent/>:<Login/>}
        <Switch>
          <Route path="/insert" component={() => <Insert />} />
          <Route path="/home" component={() => <Home />} />
          <Route path="/findComponents" component={() => <FindComponents />} />
          <Route path="/Login" component={()=><Login/>}/>
        </Switch>
      </Auxx>
    );
  }
}

export default Layout;
