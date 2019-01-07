import React from 'react';
import { NavLink } from 'react-router-dom';

const toggler = () => {
  const navElement = document.getElementById('Topnav');
  if (navElement.className === 'topnav') {
    navElement.className += ' responsive';
  }
  else {
    navElement.className = 'topnav';
  }
}
const Header = () => {
  return (
    <div id="img-cover">
      <div id="dim-img">
        <nav className="topnav" id="Topnav">
          <div id="brand-div">
            <img className="nav-brand" src="/images/images.jpg" />
            <h1>Fast Food App</h1>
          </div>
          <div id="nav-links">
            <NavLink to="/" activeClassName="active" className="nav-link" exact={true}>HOME</NavLink>
            <NavLink to="/login" activeClassName="active" className="nav-link" exact={true}>LOG IN</NavLink>
            <NavLink to="/signup" activeClassName="active" className="nav-link" exact={true}>SIGN UP</NavLink>
            <NavLink to="/contact" activeClassName="active" className="nav-link" exact={true}>CONTACT US</NavLink>
          </div>
          <button className="icon" onClick={ toggler }>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </div>
    </div>
  );
};
export default Header;
