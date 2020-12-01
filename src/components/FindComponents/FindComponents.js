import React, { Component } from "react";
import PageDivision from "./pageDivision";
import axios from 'axios';
import NavbarComponent from '../Layout/NavbarComponent';



const components = [
  { id: "1", techType: "java", componentFunction: "sort", name: "jSort" , facetedSearch:"facetedSearch" },
  {
    id: "2",
    techType: "javascript",
    componentFunction: "sort",
    name: "jsSort",
    facetedSearch:"facetedSearch"
  },
  { id: "3", techType: "javascript", componentFunction: "find", name: "jsf" ,facetedSearch:"facetedSearch"},
  { id: "4", techType: "React", componentFunction: "select", name: "RSt" ,facetedSearch:"facetedSearch"},
  { id: "5", techType: "java", componentFunction: "find", name: "jfk" ,facetedSearch:"facetedSearch"},
];

// const nodata = "#";

export default class FindComponents extends Component {
  state = {
    SearchAttributes: {
      TechType: "",
      ComponentFunction: "",
    },
    facetedSearch: "facetedSearch",
    SearchedComponents: [],
  };

  techTypeChangeHandler = (techType) => {
    console.log(techType + "11");
    this.setState({
      SearchAttributes: { ...this.state.SearchAttributes, TechType: techType },
    });
  };
  componentFunctionChangeHandler = (_componentFunction) => {
    this.setState({
      SearchAttributes: {
        ...this.state.SearchAttributes,
        ComponentFunction: _componentFunction,
      },
    });
  };

  searchComponentsHandler = () => {
    var _searchedComponents = [];
    for (let component of components) {
      if (
        (component.techType.toLowerCase() ===
          this.state.SearchAttributes.TechType.toLowerCase() ||
          this.state.SearchAttributes.TechType === "") &&
          component.componentFunction.includes(
          this.state.SearchAttributes.ComponentFunction
        ) &&
        (component.facetedSearch.includes(
          this.state.facetedSearch
        ))

      ) {
        _searchedComponents.push(component);
      }
    }
    this.setState({ SearchedComponents: _searchedComponents });
    // console.log(_searchedComponents);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.SearchAttributes !== this.state.SearchAttributes) {
      this.searchComponentsHandler();
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const persons = res.data;
        this.setState({SearchedComponents:persons})
      })
  }

  searchBoxChangeHandler = (event)=>{
    console.log(event.target.value);
    this.setState({facetedSearch:event.target.value})
  }

  searchBoxOnSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(this.state.facetedSearch);
  }

  render() {
    return (
      <div>
        <PageDivision
          searchComponentsHandler = {() => this.searchComponentsHandler()}
          components={this.state.SearchedComponents}
          techTypeChangeHandler={(tt) => this.techTypeChangeHandler(tt)}
          componentFunctionChangeHandler={(cf)=>this.componentFunctionChangeHandler(cf)}
          searchBoxChangeHandler={(search) => this.searchBoxChangeHandler(search)}
          searchBoxOnSubmitHandler={(search) => this.searchBoxOnSubmitHandler(search)}
        />
      </div>
    );
  }
}
