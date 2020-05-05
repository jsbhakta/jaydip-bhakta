/* eslint-disable no-undef */
import React from "react";


const Header = props =>
  <header className="Header navbar navbar-inverse navbar-fixed-top">
    <img
      className="pull-left Header-title"
      style={{borderRadius: "50%"}}
      src={require(".././img/profile_pic.jpg")}
      alt="header"
      width="140px"
    />
      <div className="pull-right Header-session">
        <h6 className="Header-hello">Welcome, Guest!</h6>
      </div>
  </header>;

Header.displayName = "Header";

export default Header;
