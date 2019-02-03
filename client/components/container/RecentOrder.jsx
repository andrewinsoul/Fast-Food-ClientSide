import React, { Component } from 'react';
import Header from '../presentational/common/Header';

/**
 * @description represents dummy recent orders component
 * @class RecentOrders
 */
class RecentOrders extends Component {
  /**
   * @param {null} - no param
   * @returns {JSX} - return jsx
   * @description - React render method
   */
  render() {
    return (
      <div>
        <Header/>
        <h1>Recent Orders</h1>
      </div>
    );
  }
}
export default RecentOrders;
