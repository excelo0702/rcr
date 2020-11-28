import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const rightPageCard = (props) => {
  return (
    <Col xs={12} md={12}>
      <Card style={{ padding: "50px", margin: "50px" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            id : {props.id}
            <br />
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            {props.techType} {props.componentFunction}
            <br />
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default rightPageCard;
