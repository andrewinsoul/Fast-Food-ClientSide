import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { formatPrice } from "../../utilities/format";
import { AddToCart, RemoveFromCart } from "../../actions/cartAction";
/**
 * @class AllMenuForUser
 * @description - class that displays all available menu to user
 */
class AllMenuForUser extends Component {
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
            <p className="pad-left pad-right">{this.props.food}</p>
            <p className="pad-left pad-right">
              {formatPrice(this.props.price)}
            </p>
          </div>
          <div
            className="space-item-in-flex"
            style={{ marginTop: "11px", display: "flex" }}
          >
            <p className="pad-left pad-right no-marg-top">
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
                  <img src="./images/remove-img.png" />
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
                  <img src="./images/add-img.png" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllMenuForUser.propTypes = {
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
)(AllMenuForUser);
