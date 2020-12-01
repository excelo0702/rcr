import React from 'react';
import NavbarComponent from '../src/components/NavbarComponent'
import PageDivision from '../src/components/pageDivision';

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
