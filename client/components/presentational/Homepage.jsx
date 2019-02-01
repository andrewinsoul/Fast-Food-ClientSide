import React from "react";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import Header from "./Header";
import IndexFooter from "./Footer";
import {
  accountImg,
  paymentImg,
  cartImg,
  deliverImg
} from "../../public/images";

const HomePage = () => (
  <div>
    <Header />
    <main>
      <div className="content">
        <h1>Fast Food App</h1>
        <div id="wel-div">
          <Typing loop cursorClassName="cursor fa fa-motorcycle">
            <p id="welcome-txt">
                Welcome to Fast Food App
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={30} />
                Can't take a minute to get food because of tight schedules?
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={62} />
                Place your orders and get your tantalizing meal right away!
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={60} />
            </p>
          </Typing>
        </div>
        <h1 id="welcome-header">Welcome to Fast Food App</h1>
      </div>
      <div className="sub-content">
        <h2>How It Works</h2>
        <div id="aval-cusines">
          <div className="sh-left">
            <img src={accountImg} alt="create account image" />
            <b>Create an Account</b>
            <p>
                Quickly{" "}
              <Link to="/signup" className="works-a">
                  sign up
              </Link>{" "}
                if you don't have an account or{" "}
              <Link to="/login" className="works-a">
                  login
              </Link>{" "}
                if you have an account to have access to app's features
            </p>
          </div>
          <div className="sh-left">
            <img src={cartImg} alt="cart image" />
            <b>Populate Cart</b>
            <p>
                Select from our list of menu your choice and populate your cart
            </p>
          </div>
          <div className="sh-left sh-right">
            <img src={deliverImg} alt="delivery image" />
            <b>Receive Orders</b>
            <p>
                We ensure you get your orders accurately within the shortest
                period of time
            </p>
          </div>
          <div className="sh-right">
            <img src={paymentImg} alt="make payments image" />
            <b>Make Payment</b>
            <p>
                Make payment as soon as you receive orders and you assert it's
                your choice
            </p>
          </div>
        </div>
      </div>
    </main>
    <IndexFooter />
  </div>
);

export default HomePage;
