import React, { Component } from "react";
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-bottom">
        <strong className="text-primary">
          Copyright © 2019.  All Rights Reserved.
        </strong>
      </footer>
    );
  }
}

Footer.displayName = "Footer";


export default Footer;
