import React, { PureComponent } from "react";
import "../styles/about.css";
import ItemBox from "./common/item-box";
import eduImg from "../img/education.png";
import workImg from "../img/work.png";
import personalImg from "../img/personal.png"

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDetail: ""
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(value) {
    this.setState({
     selectedDetail: value
   });
  }

  renderBackButton() {
    return (
      <button className="btn btn-success back-btn" onClick={() => this.onItemClick("")}>Back</button>
    );
  }

  renderEducatiion () {
    return (
      <div>
        {this.renderBackButton()}
        <h1>Education</h1>
      </div>
    );
  }

  renderExperience () {
    return (
      <div>
        {this.renderBackButton()}
        <h1>Experience</h1>
      </div>
    );
  }

  renderPersonal () {
    return (
      <div>
        {this.renderBackButton()}
        <h1>Personal</h1>
      </div>
    );
  }

  renderPhotograpy () {
    return (
      <div>
        {this.renderBackButton()}
        <h1>Images/Video</h1>
        Coming Soon...
      </div>
    );
  }

  renderAboutTitle() {
    return (
      <div className="container-fluid">
        <div className="row about-row-container">
          <ItemBox
            alt="Education"
            icon={eduImg}
            name="Education"
            onClick={this.onItemClick}
            />
          <ItemBox
            alt="Work Experience"
            icon={workImg}
            name="Work Experience"
            onClick={this.onItemClick}
            />
        </div>
        <div className="row about-row-container">
          <ItemBox
            alt="Personal"
            icon={personalImg}
            name="Personal"
            onClick={this.onItemClick}
            />
          <ItemBox
            alt=""
            icon=""
            name="Videos/Images"
            onClick={this.onItemClick}
            />
        </div>
      </div>
    );
  }

  render() {
    const { selectedDetail } = this.state;
    console.log(selectedDetail);
    if (selectedDetail === "Education") {
      return this.renderEducatiion();
    } else if (selectedDetail === "Work Experience") {
      return this.renderExperience();
    } else if (selectedDetail === "Personal") {
      return this.renderPersonal();
    } else if (selectedDetail === "Videos/Images") {
      return this.renderPhotograpy();
    }
    return this.renderAboutTitle();
  }
}
About.displayName = "About";
export default About;
