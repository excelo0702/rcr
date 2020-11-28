import React from "react";
import { Route } from "react-router";
import Auxx from "../hoc/Auxx";
import Home from "../Home/Home";
import NavbarComponent from "./NavbarComponent";
import Insert from "../Insert/Insert";
import FindComponents from "../FindComponents/FindComponents";

const Layout = () => {
  return (
    <Auxx>
      <NavbarComponent />
      <Route path="/insert" component={() => <Insert />} />
      <Route path="/home" component={() => <Home />} />
      <Route path="/findComponents" component={() => <FindComponents />} />
    </Auxx>
  );
};

export default Layout;
