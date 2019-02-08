import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../presentational/common/Header";
import getMenuAction from "../../actions/menuAction";
import { backgroundImg } from "../../public/images";
import AllMenuForUser from "./Menu";
import Cart from "./Cart";

/**
 * @description represents the AllMenu component
 */
class AllMenu extends Component {
  /**
   *
   * @param {object} props - props object
   */
  constructor(props) {
    super(props);
    this.loaderRef = React.createRef();
    this.categoryRef = React.createRef();
    this.state = {
      orderPlaced: false
    };
  }

  /**
   * @param {null} - returns null
   * @returns {null} - returns undefined
   * @description - check for token validity
   */
  async componentWillMount() {
    try {
      await jwtDecode(localStorage.getItem("x-access-token"));
    } catch (error) {
      this.props.history.push("/login");
    }
  }

  /**
   * @param {null} - no argument required
   * @returns {null} - returns nothing
   */
  async componentDidMount() {
    try {
      this.loaderRef.current.style.display = "block";
      await this.props.getMenuAction();
      this.loaderRef.current.style.display = "none";
    } catch (e) {
      console.warn("");
    }
  }

  /**
   * @param {null} - no argument required
   * @returns {null} - returns nothing
   */
  reloadComponent = () => {
    this.setState({ orderPlaced: true });
    this.forceUpdate();
  };

  /**
   * @param {null} - no parameter
   * @returns {jsx} - returns jsx syntax
   */
  render() {
    const AllMenuComponents = this.props.menu.map(item => (
      <AllMenuForUser
        foodId={item.foodid}
        key={`id-${item.foodid}`}
        description={item.description}
        food={item.food}
        category={item.category}
        price={item.price}
        reload={this.reloadComponent}
        orderPlaced={this.state.orderPlaced}
      />
    ));
    return (
      <div
        id="img-cover"
        style={{
          background: `url(${backgroundImg}) no-repeat fixed`,
          backgroundSize: "cover"
        }}
      >
        <div id="dim-img">
          <Header />
          <main>
            <div id="menu-cart-cat-container">
              <div
                id="search-category"
                style={{ background: "#ffffff", color: "black" }}
                onClick={() => {
                  this.categoryRef.current.style.display === "block" ?
                    (this.categoryRef.current.style.display = "none") :
                    (this.categoryRef.current.style.display = "block");
                }}
              >
                <span style={{ fontSize: '11px', color: 'grey' }}>Search By Category</span>
                <i
                  className="fas fa-caret-down"
                  style={{ marginRight: "2%" }}
                />
              </div>
              <div
                id="cusine-category"
                className="food-div"
                ref={this.categoryRef}
              >
                <h3 className="pad-left center-txt">Cusine Category</h3>
                <div className="col-grey pad-left space-down">
                  <a style={{ color: "green" }} href="#">
                    All
                  </a>
                </div>
                <div className="col-grey pad-left space-down">
                  <a href="#african">African</a>
                </div>
                <div className="col-grey pad-left space-down  ">
                  <a href="#intercontinental">Intercontinental</a>
                </div>
                <div className="col-grey pad-left space-down">
                  <a href="#fries">Fries</a>
                </div>
                <div className="col-grey pad-left space-down">
                  <a href="#others">Others</a>
                </div>
              </div>

              <div id="restuarant-menu" className="food-div">
                <div className="center-item-in-flex">
                  <input
                    className="space-around full-width"
                    type="text"
                    placeholder="Search for Food"
                  />
                  <button id="search-food">
                    <i className="fa fa-search" />
                  </button>
                </div>
                <div id="spacer-div" />
                <div id="menu-items">
                  <h3 className="center-txt">Menu</h3>
                  <div
                    style={{
                      marginLeft: "48%",
                      marginBottom: "5%"
                    }}
                    className="loader"
                    ref={this.loaderRef}
                  />
                  {AllMenuComponents}
                </div>
              </div>
              <Cart reload={this.reloadComponent} />
            </div>
          </main>
          <footer>
            <div id="end">
              <small>
                <div className="center-txt">
                  &copy;Andela Team 2018 All Rights Reserved.
                </div>
                <div className="center-txt">Designed By Andy</div>
              </small>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menu: state.menuReducer.menu
});
AllMenu.propTypes = {
  history: PropTypes.object,
  getMenuAction: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired
};
export default connect(
  mapStateToProps,
  {
    getMenuAction
  }
)(AllMenu);
