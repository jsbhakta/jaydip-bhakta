import React from 'react';
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from "react-favicon";

import Header from "./header";
import Footer from "./footer";

const App = props =>
  <div>
    <Header/>
    <div className="container-fluid">
      <div className="row">
        <section className="col-sm-9 col-lg-10 AppSection">
          <Favicon url="https://images.app.goo.gl/Ry4NhTqhXJWVvpqj8" />
          {props.children}
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
