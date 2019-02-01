import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";

/**
 * @description represents the RegularUser component
 */
class RegularUser extends Component {
  /**
   * @param {null} - returns null
   * @returns {null} - returns undefined
   * @description - check for token validity
   */
  componentWillMount() {
    try {
      jwtDecode(localStorage.getItem("x-access-token"));
    } catch (error) {
      this.props.history.push("/login");
    }
  }

  /**
   * @param {null} - no parameter
   * @returns {jsx} - returns jsx syntax
   */
  render() {
    return <h3 style={{ color: "white" }}>Regular User Page</h3>;
  }
}
RegularUser.propTypes = {
  history: PropTypes.object
};
export default RegularUser;
