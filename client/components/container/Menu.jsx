import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { formatPrice } from "../../utilities/format";
import { AddToCart, RemoveFromCart } from "../../actions/cartAction";
import { addImg, removeImg } from "../../public/images";

/**
 * @class Menu
 * @description - class that displays all available menu to user
 */
class Menu extends Component {
  /**
   *
   * @param {object} props - props object
   */
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false
    };
  }

  /**
   * @returns {JSX} - returns the markup of the page
   */
  render() {
    return (
      <div className="menu-row">
        <div className="bottom-line">
          <div className="space-item-in-flex">
            <b>
              <p className="pad-left pad-right">{this.props.food}</p>
            </b>
            <b>
              <p className="pad-left pad-right">
                {formatPrice(this.props.price)}
              </p>
            </b>
          </div>
          <div
            className="space-item-in-flex"
            style={{ marginTop: "11px", display: "flex" }}
          >
            <p
              className="pad-left pad-right no-marg-top"
              style={{ margin: 0, paddingRight: "54px", paddingBottom: "10px" }}
            >
              <small className="all-menu" style={{ textAlign: "justify" }}>
                {this.props.description}
              </small>
            </p>
            <div className="pad-right">
              {this.state.isAdded ? (
                <button
                  onClick={() => {
                    this.props.RemoveFromCart(this.props.foodId);
                    this.setState({ isAdded: false });
                  }}
                  className="pad-right remove-item-btn"
                >
                  <span style={{ color: "white" }}>
                    <i className="fas fa-minus" />
                  </span>
                </button>
              ) : (
                <button
                  className="pad-right add-item-btn"
                  onClick={() => {
                    this.props.AddToCart({
                      id: this.props.foodId,
                      name: this.props.food,
                      price: this.props.price,
                      quantity: 1,
                      description: this.props.description
                    });
                    this.setState({ isAdded: true });
                  }}
                >
                  <span
                    style={{
                      color: "white"
                    }}
                  >
                    <i className="fas fa-plus" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  price: PropTypes.number,
  foodId: PropTypes.number,
  food: PropTypes.string,
  AddToCart: PropTypes.func,
  RemoveFromCart: PropTypes.func,
  description: PropTypes.string
};
export default connect(
  null,
  {
    AddToCart,
    RemoveFromCart
  }
)(Menu);
