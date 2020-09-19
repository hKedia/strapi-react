import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Create from "./pages/Create.js";
import Nav from "./components/Nav.js";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
