import React from "react";
import "../styles/about.css";
import ItemBox from "./common/item-box";
import eduImg from "../img/education.png";
import workImg from "../img/work.png";
import personalImg from "../img/personal.png"

const About = props => {

    return (
      <div className="container-fluid">
        <div className="row about-row-container">
          <ItemBox
            alt="Education"
            icon={eduImg}
            name="Education"
            />
          <ItemBox
            alt="Work Experience"
            icon={workImg}
            name="Work Experience"
            />
        </div>
        <div className="row about-row-container">
          <ItemBox
            alt="Personal"
            icon={personalImg}
            name="Personal"
            />
          <ItemBox
            alt=""
            icon=""
            name="Other Stuff"
            />
        </div>
      </div>
    );
};

export default About;
