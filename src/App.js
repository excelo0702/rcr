import React, {Component} from 'react';
import PageDivision from '../src/components/pageDivision';

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
