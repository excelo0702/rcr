import React, { Component } from "react";
import PageDivision from "../Layout/pageDivision";

const components = [
  { id: "1", techType: "java", componentFunction: "sort", name: "jSort" },
  {
    id: "2",
    techType: "javascript",
    componentFunction: "sort",
    name: "jsSort",
  },
  { id: "3", techType: "javascript", componentFunction: "find", name: "jsf" },
  { id: "4", techType: "React", componentFunction: "select", name: "RSt" },
  { id: "5", techType: "java", componentFunction: "find", name: "jfk" },
];

// const nodata = "#";

export default class FindComponents extends Component {
  state = {
    SearchAttributes: {
      TechType: "",
      ComponentFunction: "",
    },
    SearchedComponents: components,
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
        )
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
    console.log("[didUpdate]");
  }

  componentDidMount() {
    console.log("[didMount");
  }

  render() {
    return (
      <div>
        <PageDivision
          searchComponentsHandler={() => this.searchComponentsHandler()}
          components={this.state.SearchedComponents}
          techTypeChangeHandler={(tt) => this.techTypeChangeHandler(tt)}
          componentFunctionChangeHandler={(cf) =>
            this.componentFunctionChangeHandler(cf)
          }
        />
      </div>
    );
  }
}
