import React, { PureComponent } from "react";
import "../styles/about.css";
import ItemBox from "./common/item-box";
import eduImg from "../img/education.png";
import workImg from "../img/work.png";
import personalImg from "../img/personal.png";
import photographyImg from "../img/photography.png";

import SlideShow from "./common/slide-show";


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
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <td><h4>SUMMARY</h4></td>
                <td>
                  <ul>
                    <li>
                      Working experience of developing optimized website architecture
                    </li>
                    <li>
                      Extensive knowledge of developing optimized website using React.js, JavaScript, HTML5 and CSS
                    </li>
                    <li>
                      Strong website testing and data/network security management skills
                    </li>
                    <li>
                      Excellent communication and consultation skills
                    </li>
                    <li>
                      Demonstrated ability to work independently as well as in a team environment
                    </li>
                    <li>
                      Quick learner with strong desire and aptitude to learn new tools and techniques
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><h4>TECHNICAL SKILLS:</h4></td>
                <td>
                  <ul>
                    <li className="row text-right">
                      <strong className="col-sm-2">Web Development:</strong>React.js, JavaScript, Node.js, Bootstrap, HTML5 and CSS
                    </li>
                    <li className="row text-right">
                      <strong className="col-sm-2">Programing Languages: </strong>Python, Scala, C++, Java, XML and R
                    </li>
                    <li className="row text-right">
                      <strong className="col-sm-2">Scripting Languages: </strong>Shell, Perl
                    </li>
                    <li className="row text-right">
                      <strong className="col-sm-2">Database: </strong>MySQL/SQL, MongoDB,
                    </li>
                    <li className="row text-right">
                      <strong className="col-sm-2">Tools: </strong>Xcode, Sublime, Atom, Visual Studio,
                    </li>
                    <li className="row text-right">
                      <strong className="col-sm-2">Application: </strong>TIBCO, git, Git Hub Adobe Photoshop; Flash,
                    </li>
                    <li className="row text-right">
                      <strong className="col-sm-2">Operating System: </strong>Windows, macOS, Android, Linux
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><h4>VOLUNTEER WORK:</h4></td>
                <td>
                  Code for Fun (School), Fremont, CA Oct 2015 – May 2016
                  <p>Volunteer Teaching Assistant:</p>
                  <ul>
                    <li>
                      Provided technical support to setup coding environment on computers
                    </li>
                    <li>
                      Communicated and coordinated with students and lead instructor
                    </li>
                    <li>
                      Organized and supported promotional events
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><h4>EXPERIENCE:</h4></td>
                <td>
                  <strong>
                    SUM+IT Enterprises - Sault Ste. Marie, ON, Canada | <i>Feb 2019 – Present</i>
                    <p>Full Stack Web Developer <i>(Remote)</i></p>
                  </strong>
                  <ul>
                    <li>
                      Designe and implemente SUM+IT web application to allow critical parts of the app to handle 1,00+ concurrent requests
                    </li>
                    <li>
                        Improve front-end by replacing it with ReactJS, Node.js, Bootstrap for faster loading of heavy data
                    </li>
                    <li>
                      Wrok with team of 5 people, Founder, Developers and Investors
                    </li>
                    <li>
                      Maintain and configure MongoDB instances to achieve maximum performance and availability
                    </li>
                    <li>Create User Authentication with Node.js and MongoDB by setting user roles and their permission</li>
                  </ul>
                  <strong>
                    Northwestern Polytechnic University - Fremont, CA, USA | <i>Sep 2016 – Sept 2017</i>
                    <p>Career Services Assistant | Graduate Teaching Assistant</p>
                  </strong>
                  <ul>
                    <li>
                      Provided technical support using Desktop applications including MS Word, MS Excel, Adobe Reader, and Adobe Photoshop
                    </li>
                    <li>
                      Organizing and managing career department events
                    </li>
                    <li>
                      Communicating and coordinating with students and companies for career fair event on regular basis
                    </li>
                  </ul>
                  <strong>
                    Northwestern Polytechnic University - Fremont, CA, USA | <i>Jan 2016 – Aug 2016</i>
                    <p>Lab Instructor</p>
                  </strong>
                  <ul>
                    <li>
                      Taught more than 50 graduate students – C++ Object Oriented Programming
                    </li>
                    <li>
                      Designed grading rubrics and course activities including Lab Assignments, Quizzes and Exams
                    </li>
                    <li>
                      Coordinated with the class instructor to get suggestion and recommendation on lab material
                    </li>
                    <li>
                      Taught to write optimize code and test security and quality control of the software
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><h4>SCHOOL PROJECT:</h4></td>
                <td>
                  Stock Recommendation & Predicting System - Website, <i>Jan 2018 – Apr 2018</i>
                <p>Role: Team Leader / Full Stack Developer</p>
                <ul>
                  <li>
                    Developed 5 different modules using python 3.6 for stock recommendation
                  </li>
                  <li>
                    Created algorithm to recommend stocks based on stock performance and user needs
                  </li>
                  <li>
                    Design the dynamic web pages using HTML5 & CSS3 and javaScript
                  </li>
                </ul>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }

  renderPersonal () {
    return (
      <div>
        {this.renderBackButton()}
        <h1>Personal</h1>
        <i>Coming Soon...</i>
      </div>
    );
  }

  renderPhotograpy () {
    const scenicImgs = [
      {
         type: "golden_gate",
         image: require("../img/pictures/scenic/golden_gate.jpg")
       },
       {
         type: "lake",
         image: require("../img/pictures/scenic/lake.jpg")
       },
       {
         type: "sea",
         image: require("../img/pictures/scenic/sea.jpg")
       },
       {
         type: "tree",
         image: require("../img/pictures/scenic/tree.jpg")
       },
       {
         type: "yosomite",
         image: require("../img/pictures/scenic/yosomite.jpg")
       },
    ];
    return (
      <div>
        {this.renderBackButton()}
        <h1>Images/Video</h1>
        <i>Coming Soon...</i>
        <br/>
        <div>
          <SlideShow slideImages={scenicImgs}/>
        </div>

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
