import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const rightPageCard = (props)=> {
    return (
        <Col xs={12} md={12}>
            <Card style={{padding:'50px', margin:'50px'}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default rightPageCard;