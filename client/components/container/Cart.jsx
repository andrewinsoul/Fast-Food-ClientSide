import React, { Component } from "react";

/**
 * @description represents the cart component
 */
class Cart extends Component {
  /**
   *
   * @param {object} props - props object
   */
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  /**
   * @param {null} - no parameter
   * @returns {jsx} - returns jsx
   */
  render() {
    return (
      <div id="cart" className="food-div">
        <div className="cart-section">
          <div className="menu-items">
            <h3 className="center-txt">Your Cart</h3>
          </div>
          <button style={{ fontSize: '20px' }}
            id="place-order">
            {`Place Order ${0.00} NGN`}
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
