import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Create from "./pages/Create.js";
import Nav from "./components/Nav.js";
import SinglePost from "./pages/SinglePost.js";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/:id" component={SinglePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
