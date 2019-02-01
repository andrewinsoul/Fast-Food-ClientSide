import React from "react";
import {
  facebookIcon,
  goggleImg,
  twitterIcon,
  instaIcon
} from "../../public/images";

const IndexFooter = () => (
  <div>
    <footer className="index-footer">
      <div className="footer-div" id="social-handles">
        <h4 className="center-txt">Reach us on our handles</h4>
        <img className="footer-img" src={facebookIcon} alt="facbook-icon" />
        <img className="footer-img" src={goggleImg} alt="google-icon" />
        <img className="footer-img" src={twitterIcon} alt="twitter-icon" />
        <img className="footer-img" src={instaIcon} alt="instagram-icon" />
      </div>
      <div className="footer-div" id="subscribe">
        <h4 className="center-txt">
          Subscribe and get latest news on best deals
        </h4>
        <form action="">
          <input
            id="foot-entry"
            className="sub-form"
            type="email"
            placeholder="Enter Email..."
          />
          <button className="sub-form" id="foot-btn">
            <i className="fa fa-send" />
          </button>
        </form>
      </div>
    </footer>
    <div id="end">
      <small>
        <div className="center-txt">
          &copy;Andela Team 2018 All Rights Reserved.
        </div>
        <div className="center-txt">Designed By Andy</div>
      </small>
    </div>
  </div>
);
export default IndexFooter;
