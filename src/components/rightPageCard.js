import React,{Component} from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './rightPageCard.css';
import history from '../history';


class rightPageCard extends Component{

    handleClick = ()=>{
        console.log("clicked");
        history.push("/componentDetail");
    }

    render(){
        return (

            <div>

            <Col xs={12} md={12}>
                <Card onClick={this.handleClick} className="card">
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            {this.props.body}
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            </div>
        );
    }
}

export default rightPageCard;