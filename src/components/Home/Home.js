import React from "react";
import Auxx from '../hoc/Auxx'
import {firebase_var} from "../../config/firebaseConfig";
import NavbarComponent from '../Layout/NavbarComponent';

class Home extends React.Component {
  render() {
    firebase_var.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        console.log(user.uid); 
      }
    })
    return(
      <Auxx>
        <NavbarComponent/>
        <p>Home</p>
      </Auxx>
    ) 
  }
}

export default Home;
