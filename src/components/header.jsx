/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import '../styles/header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <Link className="" to="/">
          <img
          src={require("../img/logo.png")}
          height="70"
          width="70"
          alt="logo"
          />
        <div className="name text-white"> Jaydip Bhakta</div>
        </Link>
        <div className="menu-style">
          <Menu isOpen={ false } >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
          </Menu>
        </div>

      </header>
    );
  }
}

Header.displayName = "Header";

export default Header;
