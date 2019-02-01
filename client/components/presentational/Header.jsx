import React from 'react';
import { NavLink } from 'react-router-dom';
import toggler from '../../utils/toggler';

const Header = () => (
  <div id="img-cover">
    <div id="dim-img">
      <nav className="topnav" id="Topnav">
        <div id="brand-div">
          <img className="nav-brand" src="/images/images.jpg" />
          <h1>Fast Food App</h1>
        </div>
        <div id="nav-links">
          <NavLink
            to="/"
            activeClassName="active"
            className="nav-link"
            exact>
                HOME
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="active"
            className="nav-link"
            exact>
                LOG IN
          </NavLink>
          <NavLink
            to="/signup"
            activeClassName="active"
            className="nav-link"
            exact>
                SIGN UP
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            className="nav-link"
            exact>
              CONTACT US
          </NavLink>
        </div>
        <button className="icon" onClick={toggler}>
          <i className="fa fa-bars"></i>
        </button>
      </nav>
    </div>
  </div>
);
export default Header;
