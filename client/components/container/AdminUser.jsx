import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

/**
 * @description - AdminUser component
 */
class AdminUser extends Component {
  /**
   *
   * @param {object} props
   * @returns {null} - returns null value;
   */
  constructor(props) {
    super(props);
    try {
      const token = localStorage.getItem('x-access-token');
      jwtDecode(token);
    } catch (error) {
      this.props.history.push('/login');
    }
  }

  /**
   * @params {null} - null parameter
   * @returns {null} - returns no value
   */
  render() {
    return (
      <h3 style={{ color: 'white' }}>Admin User Page</h3>
    );
  }
}
AdminUser.propTypes = {
  history: PropTypes.object
};
export default AdminUser;
