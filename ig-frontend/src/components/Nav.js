import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div className="nav">
      <NavLink to="/" exact className="nav__link">
        Home
      </NavLink>
      <NavLink to="/create" exact className="nav__link">
        Create
      </NavLink>
    </div>
  );
};
