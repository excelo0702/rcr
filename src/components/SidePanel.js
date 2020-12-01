import React from "react";
import AllAttributes from "./SearchAttributes/AllAttributes";

const SidePanel = (props) => {
  return (
    <div>
      <AllAttributes
        searchComponentsHandler={props.searchComponentsHandler}
        techTypeChangeHandler={props.techTypeChangeHandler}
        componentFunctionChangeHandler={props.componentFunctionChangeHandler}
      />
    </div>
  );
};

export default SidePanel;
