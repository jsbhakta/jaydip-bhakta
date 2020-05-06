/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../styles/header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/">
            <img
            src={require("../img/logo.png")}
            height="70"
            width="70"
            alt="logo"
            />
            <div className="name text-white"> Jaydip Bhakta</div>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.displayName = "Header";

export default Header;
