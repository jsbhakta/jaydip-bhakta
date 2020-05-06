import React, { Component } from "react";

import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <img className="background-img" alt="homePage" src={require("../img/street.jpg")}/>
          <div className="home-title-name">
            Jaydip Bhakta
          </div>
        <div className="home-title-year">
          Welcome!
        </div>
      </div>
    );
  }
}

Home.displayName = "Home";


export default Home;
