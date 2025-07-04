import React from "react";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Mainlayot</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default header;
