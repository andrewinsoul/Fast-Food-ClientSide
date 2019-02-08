import React from 'react';
import { NavLink } from 'react-router-dom';
import toggler from '../../../utils/toggler';
import logoutUser from '../../../utils/logout';
import { brandImg, backgroundImg } from '../../../public/images';

const Header = () => (
  <div>
    <div>
      <nav className="topnav" id="Topnav">
        <div id="brand-div">
          <img className="nav-brand" src={brandImg} />
          <h1>Fast Food App</h1>
        </div>
        <div id="nav-links">
          <NavLink
            to="/order"
            activeClassName="active"
            className="nav-link"
            exact>
                PLACE ORDER
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="active"
            className="nav-link"
            exact>
                RECENT ORDERS
          </NavLink>
          <NavLink
            to="/signup"
            activeClassName="active"
            className="nav-link"
            exact>
                PROFILE
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="active"
            className="nav-link"
            onClick={logoutUser}
            exact>
              LOG OUT
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
