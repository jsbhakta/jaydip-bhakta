import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Favicon from "react-favicon";

import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'
import Header from "./components/header";
import Footer from "./components/footer";

const routing = (
  <Router>
    <Header/>
    <Favicon url="https://lh3.googleusercontent.com/loQ961Lu5kwJOJV6YQaKfd5Qg-zV3P21FrlWhM95G4jB1IO5riQn6mWpCcBP98a65klkAw=s85"/>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
    <Footer/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
