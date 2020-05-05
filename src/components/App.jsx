import React from 'react';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "../routes";

import Favicon from "react-favicon";
import Header from "./header";
import Footer from "./footer";

const App = props =>
  <div>
    <Header/>
    <div className="container-fluid">
      <div className="row">
        <section className="col-sm-9 col-lg-10 AppSection">
          <Favicon url="https://lh3.googleusercontent.com/loQ961Lu5kwJOJV6YQaKfd5Qg-zV3P21FrlWhM95G4jB1IO5riQn6mWpCcBP98a65klkAw=s85"/>
          <Routes/>
        </section>
      </div>
    </div>
    <br/>
    <Footer/>
  </div>;

App.propTypes = {
  children: PropTypes.node
};

export default App;
