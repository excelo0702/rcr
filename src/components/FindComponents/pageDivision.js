import React from "react";
import { Row, Col } from "react-bootstrap";
import SidePanel from "../SidePanel";
import RightPage from "../../components/rightPage";

const pageDivision = (props) => {
  
  return (
    <Row className="show-grid">
      
      <Col xs={3} md={3}>
        <SidePanel
          searchComponentsHandler={props.searchComponentsHandler}
          techTypeChangeHandler={props.techTypeChangeHandler}
          componentFunctionChangeHandler={props.componentFunctionChangeHandler}
        />
      </Col>
      <Col xs={9} md={9}>
        <RightPage components={props.components} 
        searchBoxChangeHandler={props.searchBoxChangeHandler}
        searchBoxOnSubmitHandler={props.searchBoxOnSubmitHandler}
        />
      </Col>
    </Row>
  );
};

export default pageDivision;
