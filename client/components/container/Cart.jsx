import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatPrice } from '../../utilities/format';
import { AddQty, SubtractQty, PlaceOrder } from '../../actions/cartAction';

/**
 * @class Cart
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
    this.loaderRef = React.createRef();
    this.PlaceOrderRes = React.createRef();
  }

  checkOut = async () => {
    this.loaderRef.current.style.display = 'block';
    document.getElementById('app').style.pointerEvents = 'none';
    await this.props.PlaceOrder(this.props.cart);
    this.loaderRef.current.style.display = 'none';
    this.PlaceOrderRes.current.style.display = 'block';
    if (this.props.cart.length === 0) {
      this.PlaceOrderRes.current.style.color = 'red';
    } else {
      this.PlaceOrderRes.current.style.color = 'green';
      await setTimeout(() => window.location.reload(), 2000);
    }
    await setTimeout(() => (this.PlaceOrderRes.current.style.display = 'none'), 2000);
    document.getElementById('app').style.pointerEvents = 'auto';
  }

  /**
   * @param {null} - no parameter
   * @returns {jsx} - returns jsx
   */
  render() {
    let cartItems;
    let total = 0;
    if (this.props.cart.length > 0 && typeof (this.props.cart) !== 'string') {
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
        <h5 ref={this.PlaceOrderRes}
          id="place-order-res"
          style={{ marginLeft: "20%" }}
        >
          {
            this.props.cart.length === 0 ?
              'cannot place order on an empty cart' :
              'order successfully placed'
          }
        </h5>
        <div className="cart-section">
          <div className="menu-items">
            <h3 className="center-txt">Your Cart</h3>
            {cartItems}
          </div>
          <button style={{ fontSize: '20px' }}
            id="place-order"
            onClick={() => this.checkOut()}
          >
            {`Place Order ${formatPrice(total)}`}
            <div
              style=
                {
                  {
                    color: 'yellow',
                    width: '10px',
                    height: '10px',
                    marginTop: '2%',
                    marginLeft: '50%'
                  }
                } className="loader" ref={this.loaderRef}
            />
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
  PlaceOrder: PropTypes.func
};
export default connect(
  mapStateToProps,
  { AddQty, SubtractQty, PlaceOrder }
)(Cart);
