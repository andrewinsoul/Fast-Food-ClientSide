import React from "react";
import { NavLink } from "react-router-dom";
import toggler from "../../utils/toggler";
import { brandImg } from "../../public/images";

const Header = () => (
  <nav className="topnav" id="Topnav">
    <div id="brand-div">
      <img className="nav-brand" src={brandImg} />
      <h1>Fast Food App</h1>
    </div>
    <div id="nav-links">
      <NavLink to="/" activeClassName="active" className="nav-link" exact>
        HOME
      </NavLink>
      <NavLink to="/login" activeClassName="active" className="nav-link" exact>
        LOG IN
      </NavLink>
      <NavLink to="/signup" activeClassName="active" className="nav-link" exact>
        SIGN UP
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="active"
        className="nav-link"
        exact
      >
        CONTACT US
      </NavLink>
    </div>
    <button className="icon" onClick={toggler}>
      <i className="fa fa-bars" />
    </button>
  </nav>
);
export default Header;
