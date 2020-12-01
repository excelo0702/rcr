import React from 'react';
import {Row, Col } from 'react-bootstrap';
import LeftPage from './leftPage';
import RightPage from './rightPage'

function pageDivision() {
    return (
        
            <Row className="show-grid">
            <Col xs={3} md={3}>
                <LeftPage/>
            </Col>
            <Col xs={9} md={9}>
                <RightPage/>
            </Col>
            
            </Row>
    
    );
}

export default pageDivision;
