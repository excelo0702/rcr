import React, { Component } from "react";
import NavbarComponent from '../Layout/NavbarComponent';
import Auxx from '../hoc/Auxx';
import './Insert.css';
import Axios from "axios";

class Insert extends Component {

  constructor(props){
    super(props)
    this.state = {
      albumId: "",
    id: "5001",
    title: "",
    url: "https://via.placeholder.com/150/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    }
  }

  changeHandler = (e)=>{
    this.setState ({[e.target.name]:[e.target.value]});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    Axios.post("https://jsonplaceholder.typicode.com/photos",this.state)
      .then(res =>{
        console.log(res);
      })
      .catch(error =>{
        console.log(error);
      })
  }


  render() {
    return (
      <Auxx>
        <NavbarComponent/>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label>First Name</label>
            <input className="inputText" name="title" value={this.state.title} placeholder="Your name.." onChange={this.changeHandler}/>
            <label>Last Name</label>
            <input className="inputText" type="text"name="albumId" value={this.state.albumId} placeholder="Your last name.." onChange={this.changeHandler} />
            <input className="inputSubmit" type="submit" value="Submit"/>
          </form>
        </div>
      </Auxx>
    )
  }
}

export default Insert;
