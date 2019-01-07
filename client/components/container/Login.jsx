import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../presentational/Header';
import IndexFooter from '../presentational/Footer';



class Login extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <main id="main-form">
          <div className="form-jumbotron">
            <h3>Fast Food App Login</h3>
            <h5>Enter your login details</h5>
            <div className="loader"></div>
            <div>
              <b><span className="error-span"></span></b>
            </div>
            <form className="col-form">
              <div className="reg-div">
                <i className="fa fa-envelope icon">
                </i>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Email/Username"
                />
              </div>
              <div className="reg-div">
                <i className="fa fa-lock icon"></i>
                <input
                  id="password"
                  type="password"
                  required="required"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div>
                <input type="submit" value="LOG IN" className="form-btn" />
              </div>
              <div className="new-old-user">
                <Link to="/signup">I don't have an account? Sign Up</Link>
              </div>
            </form>
          </div>
        </main>
        <IndexFooter />
      </div>
    );
  }
}
export default Login
