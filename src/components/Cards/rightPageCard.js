import React, { Component } from "react";
import {Row,Col} from 'react-bootstrap';
import '../rightPageCard.css';
import history from '../../history';

class rightPageCard extends Component{


  handleClick = ()=>{
    history.push('./componentDetail');
  }

  render(){
    return (
    
    
    <div className="card" onClick={this.handleClick}>
      <Row>
          <Col>
            <img src={this.props.url} alt="ok" className="imgContainer"/>
            </Col>
            <Col>
    <h2>{this.props.name}</h2>
            <ul>
            
              <li><p><b>Attribute1:</b>{this.props.techType} </p></li>
              <li><p><b>Attribute2:</b>{this.props.componentFunction} </p></li>
              <li><p><b>Attribute3:</b>{this.props.name} </p></li>
              <li><p><b>Attribute4:</b>{this.props.key} </p></li>
              <li><p><b>Attribute5:</b>{this.props.id} </p></li>
  
            </ul>
            </Col>
        </Row>

      </div>
    );
  }
}
export default rightPageCard;
