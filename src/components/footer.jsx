import React, { Component } from "react";
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="navbar navbar-fixed-bottom">
        <div className="footer-bottom">
          <strong className="text-primary">
            Copyright © 2019.  All Rights Reserved.
          </strong>
        </div>
      </footer>
    );
  }
}

Footer.displayName = "Footer";


export default Footer;
