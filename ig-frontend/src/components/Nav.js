import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../context/UserContext.js";

export default () => {
  const { user } = useContext(UserContext);

  return (
    <div className="nav">
      <NavLink to="/" exact className="nav__link">
        Home
      </NavLink>
      {user && (
        <NavLink to="/create" exact className="nav__link">
          Create
        </NavLink>
      )}
      {!user && (
        <NavLink to="/login" exact className="nav__link">
          Login
        </NavLink>
      )}
    </div>
  );
};
