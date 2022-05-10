import React, { Component } from "react";
// import lumosityLogo from "../../Images/lumosity_logo.png";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <section className="navBar">
        <div className="navContainer">
          <div className="logoHolder">
            <img
              src="https://medias.freeflow.zone/wp-content/uploads/2021/11/22133459/new-logo-118x118-1.png"
              alt="Lumosity"
            />
          </div>
          <div className="buttonsHolder">
            <div className="getStarted">
              <Link to="/login">
                <button className="getStartedButton">Get Started Now</button>
              </Link>
            </div>
            <div className="logIn">
              <Link to="/login">
                <button className="logInButton">Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
