import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../presentational/Header';
import IndexFooter from '../presentational/Footer';
import authAction from '../../actions/authAction';

/**
 * @description represents the Login component
 */
class Login extends Component {
  /**
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginError: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.redirectUser = this.redirectUser.bind(this);
  }

  /**
   * @returns {null} - returns null
   * @param {object} e - event object
   */
  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  /**
   * @param {null} - returns null
   * @returns {function} - function that updates the current state
   */
  redirectUser() {
    try {
      const { history, authenticated, user } = this.props;
      if (authenticated && user) {
        const userType = user.userAdmin ?
          history.push('/admin') : history.push('/order');
        return userType;
      } else {
        return this.setState(
          () => (
            { loginError: 'Invalid email or password' })
        );
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  /**
   * @returns {null} - returns nothing
   * @param {object} e - event object
   */
  async onSubmit(e) {
    e.preventDefault();
    try {
      await this.props.authAction(
        'http://localhost:8000/api/v1/auth/login',
        this.state
      );
      this.redirectUser();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @param {null} - no parameter
   * @returns {jsx} - returns jsx syntax
   */
  render() {
    return (
      <div>
        <Header />
        <main id="main-form">
          <div className="form-jumbotron">
            <h3>Fast Food App Login</h3>
            <h5>Enter your login details</h5>
            <div className="loader"></div>
            <span style={{ color: "red" }}>{this.state.loginError}</span>
            <div>
              <b><span className="error-span"></span></b>
            </div>
            <form className="col-form" onSubmit={this.onSubmit}>
              <div className="reg-div">
                <i className="fa fa-envelope icon">
                </i>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Email/Username"
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
const mapStateToProps = (state) => ({
  authenticated: state.authReducer.authenticated,
  user: state.authReducer.user
});
Login.propTypes = {
  authAction: PropTypes.func.isRequired,
  history: PropTypes.object,
  authenticated: PropTypes.bool,
  user: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { authAction })(Login);
