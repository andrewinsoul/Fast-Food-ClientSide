import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../presentational/Header';
import IndexFooter from '../presentational/Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/authAction';


class Login extends Component {
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

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  redirectUser() {
    const { history, authenticated, user } = this.props;
    if (authenticated && user) {
      user.userAdmin ? history.push('/admin') : history.push('/user');
      return;
    } else {
      return this.setState(() => ({ loginError: 'Invalid email or password' }));
    }
  }
  async onSubmit(e) {
    e.preventDefault();
    try {
      await this.props.loginAction(this.state);
      this.redirectUser();
    } catch (error) {
      console.error(error);
    }
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
  loginAction: PropTypes.func.isRequired
}
export default connect(mapStateToProps, { loginAction })(Login);
