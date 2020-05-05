/* eslint-disable */
import React, { Component } from "react";

class Footer extends Component {

  render() {
    return (
      <footer className="navbar navbar-fixed-bottom">
        <div className="footer-bottom">
          <strong className="text-primary">
            Copyright © 2019.  All Rights Reserved.
          </strong>
          <span>

            <a href="http://sum-it.ca/assets/files/terms-of-service.pdf" target="_blank">
              <strong className="pull-right">Terms And Conditions</strong>
            </a>
            <br/>
            <a href="http://sum-it.ca/assets/files/privacy-policy.pdf" target="_blank">
              <strong className="pull-right">Privacy Policy</strong>
            </a></span>
        </div>
      </footer>
    );
  }
}

Footer.displayName = "Footer";

export default Footer;
