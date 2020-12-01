import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import img1 from '../../assets/img1.png';
import './Card.css';


const rightPageCard = (props) => {
  return (
    
    <div className="card">
        <p>
          <img src={props.url} alt="ok" className="img-container"/>
  <h2>{props.name}</h2>
          <ul>
          
            <li><p><b>Attribute1:</b>{props.techType} </p></li>
            <li><p><b>Attribute2:</b>{props.componentFunction} </p></li>
            <li><p><b>Attribute3:</b>{props.name} </p></li>
            <li><p><b>Attribute4:</b>{props.key} </p></li>
            <li><p><b>Attribute5:</b>{props.id} </p></li>

          </ul>
        </p>
    </div>
  );
};

export default rightPageCard;
