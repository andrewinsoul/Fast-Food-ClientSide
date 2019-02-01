import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatPrice } from '../../utilities/format';
import { AddQty, SubtractQty, PlaceOrder } from '../../actions/cartAction';

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
    let cartItems;
    let total = 0;
    if (this.props.cart.length > 0) {
      cartItems = this.props.cart.map((item, index) => (
        <div className="bottom-line" key={index}>
          <div className="flexblock">
            <div className="sn">{index + 1}</div>
            <div className="food-item-name">{item.name}</div>
          </div>
          <div className="and-div">
            <div>
              <button
                className="add-plate-btn fa fa-caret-up"
                style={{ marginRight: '9px' }}
                onClick={() => this.props.AddQty(item.id)}
              />
              <span>{item.quantity}</span>
              <button
                className="add-plate-btn fa fa-caret-down"
                style={{ marginLeft: '9px' }}
                onClick={() => {
                  if (item.quantity !== 1) {
                    this.props.SubtractQty(item.id);
                  }
                }}
              />
            </div>
            <div
              className="price-div">
              {formatPrice(item.price * item.quantity)}
              <small
                style={{ display: 'none' }}>
                {total += item.price * item.quantity}
              </small>
            </div>
          </div>
        </div>
      ));
    }
    return (
      <div id="cart" className="food-div">
        <div className="cart-section">
          <div className="menu-items">
            <h3 className="center-txt">Your Cart</h3>
            {cartItems}
          </div>
          <button style={{ fontSize: '20px' }}
            id="place-order"
            onClick={() => this.props.PlaceOrder(this.props.cart)}
          >
            {`Place Order ${formatPrice(total)}`}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartReducer
});

Cart.propTypes = {
  SubtractQty: PropTypes.func,
  AddQty: PropTypes.func,
  cart: PropTypes.array
};
export default connect(
  mapStateToProps,
  { AddQty, SubtractQty, PlaceOrder }
)(Cart);
