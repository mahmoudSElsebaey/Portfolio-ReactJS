import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-sec">
        <div className="footer-page container">
          <p className="footer-logo">Logo</p>
          <div className="footer-social">
            <div className="social-icons">
            <a
              href="https://www.facebook.com/hoodaa11?mibextid=ZbWKwL"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-elsebaey-888797223/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </a></div>
            <p>--Copyrights 2023-- All Rights Reserved here By Mahmoud Salah Elsebaey</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
