import React, {Component} from 'react';
import NavbarComponent from '../src/components/NavbarComponent'
import PageDivision from '../src/components/pageDivision';

class App extends Component{
  render(){
  return (
    <div className="App">
      <NavbarComponent/>
      <PageDivision/>
      </div>
  );
  }
}

export default App;
