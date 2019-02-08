import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatPrice } from "../../utilities/format";
import { AddQty, SubtractQty, PlaceOrder } from "../../actions/cartAction";

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
      quantity: 1
    };
    this.loaderRef = React.createRef();
    this.PlaceOrderRes = React.createRef();
  }

  checkOut = async () => {
    this.loaderRef.current.style.display = "block";
    document.getElementById("app").style.pointerEvents = "none";
    await this.props.PlaceOrder(this.props.cart);
    this.loaderRef.current.style.display = "none";
    this.PlaceOrderRes.current.style.display = "block";
    if (this.props.cart.length === 0) {
      this.PlaceOrderRes.current.style.color = "red";
    } else {
      this.PlaceOrderRes.current.style.color = "green";
      await setTimeout(() => window.location.reload(), 2000);
    }
    await setTimeout(
      () => (this.PlaceOrderRes.current.style.display = "none"),
      2000
    );
    document.getElementById("app").style.pointerEvents = "auto";
  };

  /**
   * @param {null} - no parameter
   * @returns {jsx} - returns jsx
   */
  render() {
    let cartItems;
    let total = 0;
    if (this.props.cart.length > 0 && typeof this.props.cart !== "string") {
      cartItems = this.props.cart.map((item, index) => (
        <div className="bottom-line" key={index}>
          <div className="flexblock">
            <div className="sn" style={{ paddingTop: '5%' }}>{index + 1}</div>
            <div className="food-item-name" style={{ paddingTop: '5%' }}>{item.name}</div>
          </div>
          <div className="and-div">
            <div>
              <button
                onClick={() => {
                  this.props.AddQty(item.id);
                }}
                style={{
                  marginBottom: "4px",
                  padding: "6px",
                  borderRadius: "12px",
                  marginRight: "9px"
                }}
                className="add-plate-btn"
              >
                <span style={{ color: "black" }}>
                  <i className="fas fa-caret-up" />
                </span>
              </button>
              <span>{item.quantity}</span>
              <button
                className="add-plate-btn"
                style={{
                  marginLeft: "9px",
                  marginBottom: "4px",
                  padding: "6px",
                  borderRadius: "12px",
                  marginRight: "9px"
                }}
                onClick={() => {
                  if (item.quantity !== 1) {
                    this.props.SubtractQty(item.id);
                  }
                }}
              >
                <span style={{ color: "black" }}>
                  <i className="fas fa-caret-down" />
                </span>
              </button>
            </div>
            <div className="price-div">
              {formatPrice(item.price * item.quantity)}
              <small style={{ display: "none" }}>
                {(total += item.price * item.quantity)}
              </small>
            </div>
          </div>
        </div>
      ));
    }
    const emptyCartDisplay = (
      <div style={{ margin: '19%' }}>
        <h4 id="empty-cart-title">Your Cart Empty</h4>
        <i className="fas fa-cart-plus" id="empty-cart" />
        <small id="empty-cart-msg">Please add item(s)</small>
      </div>
    );
    const filledCart = (
      <div className="cart-section">
        <div className="menu-items">
          <h3 className="center-txt"
            style={{ color: 'grey', borderBottom: '1px solid grey' }}>
            Your Cart
          </h3>
          {cartItems}
        </div>
        <button
          style={{ fontSize: "20px" }}
          id="place-order"
          onClick={() => this.checkOut()}
        >
          {`Place Order ${formatPrice(total)}`}
          <div
            style={{
              color: "yellow",
              width: "10px",
              height: "10px",
              marginTop: "2%",
              marginLeft: "50%"
            }}
            className="loader"
            ref={this.loaderRef}
          />
        </button>
      </div>
    );
    return (
      <div id="cart" className="food-div">
        <h5
          ref={this.PlaceOrderRes}
          id="place-order-res"
          style={{ marginLeft: "20%" }}
        >
          {this.props.cart.length === 0 ?
            "please fill the cart" :
            "order successfully placed"}
        </h5>
        { this.props.cart.length === 0 ? emptyCartDisplay : filledCart }
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
