import React, { PureComponent } from "react";
import "../styles/about.css";
import ItemBox from "./common/item-box";
import eduImg from "../img/education.png";
import workImg from "../img/work.png";
import personalImg from "../img/personal.png";
import photographyImg from "../img/photography.png";


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
        <table className="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th>Degree</th>
              <th>University</th>
              <th>Year</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MS in Computer Science</td>
              <td>Northwestern Polytechnic University</td>
              <td>April 2018</td>
              <td>Fremont, CA, USA</td>
            </tr>
            <tr>
              <td>Masters of Science, Corporate Finance </td>
              <td>Golden Gate University</td>
              <td>August 2014</td>
              <td>San Francisco, CA, USA</td>
            </tr>
            <tr>
              <td>Post Graduate Certificate, Financial Planning</td>
              <td>George Brown College</td>
              <td>April 2012</td>
              <td>Toronto, ON, Canada</td>
            </tr>
            <tr>
              <td>Bachelors of Commerce, Accounting & Finance</td>
              <td>Maharaja Sayajirao University of Baroda</td>
              <td>April 2009</td>
              <td>Baroda, GJ, India</td>
            </tr>
          </tbody>
        </table>
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
            alt="Videos/Images"
            icon={photographyImg}
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
