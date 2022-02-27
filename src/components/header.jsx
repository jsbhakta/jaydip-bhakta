/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import '../styles/header.css';

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
     menuOpen: true
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: true})
    console.log(this.menuOpen);
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render() {
    return (
      <header className="Header">
        <Link className="" to="/">
          <img className="logo" src={require("../img/logo.png")} alt="logo"/>
          <div className="name"> Jaydip Bhakta</div>
        </Link>
        <div className="menu-style">
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <a id="home" onClick={() => this.closeMenu()} className="menu-item" href="/">Home</a>
            <a id="about" onClick={() => this.closeMenu()} className="menu-item" href="/about">About</a>
            <a id="contact" onClick={() => this.closeMenu()} href="/contact">Contact</a>
          </Menu>
        </div>

      </header>
    );
  }
}

Header.displayName = "Header";

export default Header;
