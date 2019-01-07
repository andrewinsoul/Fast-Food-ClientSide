import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../presentational/Header';
import IndexFooter from '../presentational/Footer';

class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <main id="main-form">
        <div className="form-jumbotron">
          <h3>Fast Food Fast SignUp</h3>
          <h5>Sign Up to Fast Food Fast</h5>
          <div className="loader"></div>
          <div>
            <b><span className="error-span"></span></b>
          </div>
          <form className="signup col-form">
            <div className="reg-div">
              <i className="fa fa-user icon"></i>
              <input id="name" type="text" required="required" placeholder="Name"/>
            </div>
            <small className="error" id="name-error"></small>
            <div className="reg-div">
              <i className="fa fa-envelope icon"></i>
              <input id="email" type="email" required="required" placeholder="Email"/>
            </div>
            <small className="error" id="email-error"></small>
            <div className="reg-div">
              <i className="fa fa-at icon"></i>
              <input id="username" type="text" required="required" placeholder="Username"/>
            </div>
            <small className="error" id="username-error"></small>
            <div className="reg-div">
              <i className="fa fa-phone icon"></i>
              <input id="phone" type="text" required="required" placeholder="Phone Number"/>
            </div>
            <small className="error" id="phone-error"></small>
            <div className="reg-div">
              <i className="fa fa-lock icon"></i>
              <input id="password" type="password" required="required" placeholder="Password"/>
            </div>
            <small className="error" id="password-error"></small>
            <div className="reg-div">
              <i className="fa fa-lock icon"></i>
              <input id="repeat-password" type="password" required="required" placeholder="Confirm Password"/>
            </div>
            <small className="error" id="repeat-password-error"></small>
            <div className="reg-div">
              <i className="fa fa-home icon"></i>
              <textarea maxLength="70" required="required" id="address" placeholder="Address where you receive order" className="signup-textarea"></textarea>
            </div>
            <small className="error" id="address-error"></small>
            <div>
              <input type="submit" value="SIGN UP" className="form-btn"/>
            </div>
            <div className="new-old-user">
              <Link to="/login">Have an account? Log in</Link>
            </div>
          </form>
        </div>
      </main>
        <IndexFooter/>
      </div>
    )
  }
}

export default Signup;
