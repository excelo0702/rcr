import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import image from '../../assets/img1.png';
import './ComponentDetail.css';

class ComponentDetail extends Component{


    render(){
        return(
            <div>
                <Row>
                    <Col md={5}>
                        <img src={image} className="image"></img>
                    </Col>
                    <Col md ={7}>
                        <div>
                            <h1 className="hStyle">Title</h1>
                            <h2 className="hhStyle">Description</h2>
                            <ul>
                                <li className="liStyle">Attribute 1</li>
                                <li className="liStyle">Attribute 1</li>
                                <li className="liStyle">Attribute 1</li>
                                <li className="liStyle">Attribute 1</li>
                                <li className="liStyle">Attribute 1</li>
                                <li className="liStyle">Attribute 1</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default ComponentDetail;