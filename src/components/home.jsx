import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BasePage from "../base-page";

class Home extends Component {
    return (
      <BasePage pageTitle="Home">
        <div className="row">
          <a href="About">About</a>
        </div>
      </BasePage>
    );
  }
}

Home.displayName = "Home";

export default Home;
