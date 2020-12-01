import React from "react";
import TechType from "./EachAttribute/TechType";
import ComponentFunction from "./EachAttribute/ComponentFunction";

const AllAttributes = (props) => {
  return (
    <div>
      <TechType
        searchComponentsHandler={props.searchComponentsHandler}
        techTypeChangeHandler={props.techTypeChangeHandler}
      />
      <ComponentFunction
        searchComponentsHandler={props.searchComponentsHandler}
        componentFunctionChangeHandler={props.componentFunctionChangeHandler}
      />
    </div>
  );
};

export default AllAttributes;
