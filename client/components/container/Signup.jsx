/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../presentational/Header';
import authAction from '../../actions/authAction';
import IndexFooter from '../presentational/Footer';

/**
 * @description - class that displays sign up component
 */
class Signup extends Component {
  /**
   *
   * @param {object} props - object that holds props of the component
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      username: '',
      usernameError: '',
      phone: '',
      phoneError: '',
      password: '',
      passwordError: '',
      confirm: '',
      confirmError: '',
      address: '',
      addressError: '',
      signupError: '',
      inValidForm: true
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  /**
   *
   * @param {object} e - event object
   * @returns {null} - returns null
   */
  onChange(e) {
    const { name, value } = e.target;
    const emailRe = /^([a-z0-9_\-.]+)@([a-z]+)\.([a-z]{2,3})$/;
    const usernameRe = /^([a-z]{5,})$/;
    const phoneRe = /^[0-9]{11}$/;
    const addressRe = /^([\w\s-,.]{5,150})$/;
    this.setState({
      [name]: value
    });
    if (
      emailRe.test(this.state.email) &&
      usernameRe.test(this.state.username) &&
      phoneRe.test(this.state.phone) &&
      (this.state.password.length >= 8 &&
      this.state.password === this.state.confirm) &&
      addressRe.test(this.state.address)
    ) {
      this.setState({
        inValidForm: false
      });
    } else {
      this.setState({
        inValidForm: true
      });
    }
  }

  /**
   *
   * @param {object} e - event object
   * @returns {object} object returned value
   */
  async onSubmit(e) {
    e.preventDefault();
    this.refs.loader.style.display = 'block';
    try {
      const res = await this.props.authAction(
        'http://localhost:8000/api/v1/auth/signup',
        // 'https://fast-food-andy.herokuapp.com/api/v1/auth/signup',
        this.state
      );
      if (res) {
        this.refs.loader.style.display = 'none';
        if (res.error) {
          this.setState({
            signupError: res.error.response.data.error
          });
        } else {
          this.props.history.push('/order');
        }
      }
    } catch (error) {
      Promise.reject(error);
      console.error(error);
    }
  }

  /**
   *
   * @param {object} e - event object
   * @returns {null} - returns null value
   */
  onFocus(e) {
    if (e.target.name === 'email') {
      this.setState({ emailError: '' });
      e.target.style.borderColor = '';
    } else if (e.target.name === 'username') {
      this.setState({ usernameError: '' });
      e.target.style.borderColor = '';
    } else if (e.target.name === 'phone') {
      this.setState({ phoneError: '' });
      e.target.style.borderColor = '';
    } else if (e.target.name === 'password') {
      this.setState({ passwordError: '' });
      e.target.style.borderColor = '';
    } else if (e.target.name === 'confirm') {
      this.setState({ confirmError: '' });
      e.target.style.borderColor = '';
    } else if (e.target.name === 'address') {
      e.target.style.borderColor = '';
      this.setState({ addressError: '' });
    }
  }

  /**
   *
   * @param {object} e - event object
   * @returns {null} - null return value
   */
  onBlur(e) {
    const emailRe = /^([a-z0-9_\-.]+)@([a-z]+)\.([a-z]{2,3})$/;
    const usernameRe = /^([a-z]{5,})$/;
    const phoneRe = /^([0-9]{11})$/;
    const addressRe = /^([\w\s-,.]{5,150})$/;
    // console.log
    if (this.state[e.target.name]) {
      if (e.target.name === 'email' && (!emailRe.test(this.state.email))) {
        e.target.style.borderColor = 'red';
        this.setState({ emailError: 'invalid email format' });
      }
      if (
        e.target.name === 'username' && !usernameRe.test(this.state.username)) {
        e.target.style.borderColor = 'red';
        this.setState(
          { usernameError: 'username should be at least 5 letters long' }
        );
      }
      if (e.target.name === 'phone' && !phoneRe.test(this.state.phone)) {
        e.target.style.borderColor = 'red';
        this.setState({ phoneError: 'Enter a valid number' });
      }
      if (e.target.name === 'password' && this.state.password.length < 8) {
        e.target.style.borderColor = 'red';
        this.setState(
          { passwordError: 'password must be at least 8 characters long' }
        );
      }
      if (e.target.name === 'confirm' &&
        e.target.value !== this.state.password) {
        e.target.style.borderColor = 'red';
        this.setState({
          confirmError: 'password do not match'
        });
      }
      if (e.target.name === 'address' &&
        !addressRe.test(this.state.address)
      ) {
        e.target.style.borderColor = 'red';
        this.setState({
          addressError: 'enter a valid address'
        });
      }
    } else {
      if (e.target.name === 'email') {
        this.setState({ emailError: 'should not be empty' });
        e.target.style.borderColor = 'red';
      } else if (e.target.name === 'phone') {
        this.setState({ phoneError: 'should not be empty' });
        e.target.style.borderColor = 'red';
      } else if (e.target.name === 'password') {
        this.setState({ passwordError: 'should not be empty' });
        e.target.style.borderColor = 'red';
      } else if (e.target.name === 'username') {
        this.setState({ usernameError: 'should not be empty' });
        e.target.style.borderColor = 'red';
      } else if (e.target.name === 'address') {
        this.setState({ addressError: 'should not be empty' });
        e.target.style.borderColor = 'red';
      }
    }
  }

  /**
   * @param {null} - no param
   * @returns {jsx} - jsx representation of html
   */
  render() {
    return (
      <div>
        <Header/>
        <main id="main-form">
          <div className="form-jumbotron">
            <h3>Fast Food Fast SignUp</h3>
            <h5>Sign Up to Fast Food Fast</h5>
            <div className="loader" ref="loader">
            </div>
            <small
              className="error"
              id="signup-error">{this.state.signupError}</small>
            <div>
              <b><span className="error-span"></span></b>
            </div>
            <form className="signup col-form" onSubmit={this.onSubmit}>
              <div className="reg-div">
                <i className="fa fa-envelope icon"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required="required"
                  placeholder="Email"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                />
              </div>
              <small
                name="emailError"
                className="error"
                id="email-error">{this.state.emailError}</small>
              <div className="reg-div">
                <i className="fa fa-at icon"></i>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required="required"
                  placeholder="Username"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                />
              </div>
              <small
                ref="usernameError"
                className="error"
                id="username-error">{this.state.usernameError}</small>
              <div className="reg-div">
                <i className="fa fa-phone icon"></i>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required="required"
                  placeholder="Phone Number"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                />
              </div>
              <small
                className="error"
                id="phone-error">{this.state.phoneError}</small>
              <div className="reg-div">
                <i className="fa fa-lock icon"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required="required"
                  placeholder="Password"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                />
              </div>
              <small
                className="error"
                id="password-error">{this.state.passwordError}</small>
              <div className="reg-div">
                <i className="fa fa-lock icon"></i>
                <input
                  id="repeat-password"
                  name="confirm"
                  type="password"
                  required="required"
                  placeholder="Confirm Password"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}
                />
              </div>
              <small
                className="error"
                id="repeat-password-error">{this.state.confirmError}</small>
              <div className="reg-div">
                <i className="fa fa-home icon"></i>
                <textarea
                  maxLength="70"
                  name="address"
                  required="required"
                  id="address"
                  placeholder="Address where you receive order"
                  className="signup-textarea"
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  onFocus={this.onFocus}>
                </textarea>
              </div>
              <small
                ref="addressError"
                className="error"
                id="address-error">{this.state.addressError}</small>
              <div>
                <button
                  className="form-btn"
                  type="submit"
                  disabled={this.state.inValidForm}
                >
                SIGN UP
                </button>
              </div>
              <div className="new-old-user">
                <Link to="/login">Have an account? Log in</Link>
              </div>
            </form>
          </div>
        </main>
        <IndexFooter/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  authenticated: state.authReducer.authenticated,
  user: state.authReducer.user
});
Signup.propTypes = {
  authAction: PropTypes.func.isRequired,
  history: PropTypes.object,
  authenticated: PropTypes.bool,
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { authAction })(Signup);
