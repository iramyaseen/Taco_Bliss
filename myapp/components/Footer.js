import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="container">
        <img src="/header_logo.png" />
        <div className="footer-items">
          <div className="footer-item-list">
            <div className="social-box">
              <h3>Social</h3>
              <CiFacebook />
              <FaInstagram />
              <h3>Newsletter</h3>
              <p>Subscribe to our news letter to get latest updates</p>
              <div className="social-search">
                <input type="text" placeholder="Your Email address" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="social-box">
              <h3>My Account</h3>
              <p>Profile</p>
              <p>Address</p>
              <p>Coupons</p>
              <p>Wallet</p>
              <p>Orders</p>
            </div>
            <div className="social-box">
              <h3>Quick Links</h3>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
        <div className="footer-items container">
          <div className="footer-note">
            <div style={{ display: "flex" }}>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Accessibility Statement</p>
            </div>
            <p className="made-note">Made with MIYFD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
