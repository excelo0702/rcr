import React from "react";
import RightPageCard from "./Cards/rightPageCard";
import SearchBox from './SearchBox/SearchBox';
import {Row} from 'react-bootstrap'

const rightPage = (props) => {
  let components = props.components.map((component) => {
    return (
      <RightPageCard
        key={component.id}
        id={component.albumId}
        techType={component.techType}
        componentFunction={component.title}
        name={component.title}
        url={component.url}
      
      />
    );
  });
  
  return(
    <div>
    <SearchBox 
      onChangeHandler={props.searchBoxChangeHandler}
      onSubmitHandler={props.searchBoxOnSubmitHandler}
    />
    {components}
    </div>

    
    )

};

export default rightPage;
