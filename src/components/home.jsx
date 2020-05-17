import React, { Component } from "react";

import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="myCarousel" className="carousel slide pause" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img src={require("../img/abstract.jpg")} alt="Los Angeles" style={{width:"100%", opacity: "0.7"}}/>
              <h1 className="img-text-centered home-title">Hi, I am Jaydip, a web developer living in GJ, India.</h1>

              <p className="img-text-bottom-right">Image by
                <a href="https://pixabay.com/users/Gmit-10865089/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5035778">Gmit</a> from
                <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5035778">Pixabay</a>
              </p>
            </div>
            <div className="item">
              <img src={require("../img/school.jpg")} alt="Chicago" style={{width:"100%"}}/>
              <h1 className="img-text-centered home-title"> I like to teach...</h1>
              <p className="img-text-bottom-right">Image by
                <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4958118">Gerd Altmann</a> from
                <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4958118">Pixabay</a>
              </p>

            </div>

            <div className="item">
              <img src={require("../img/street.jpg")} alt="New york" style={{width:"100%"}}/>
              <h1 className="img-text-centered home-title">and travel</h1>
              <p className="img-text-bottom-right">Image by
                <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4958118">Gerd Altmann</a> from
                <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4958118">Pixabay</a>
              </p>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

Home.displayName = "Home";


export default Home;
