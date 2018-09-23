import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import RegisterLogin from "./registerlogin";
var path = "./icon.png";
class NavBar extends Component {
  render() {
    return (
      <header className="App">
        <img src={path} className="App-icon" alt="logo" />
        <label className="App-title">reativekarts</label>
        <img src={logo} className="App-logo" alt="logo" />
        <React.Fragment>
          <a className="App-nav-right">
            | <i class="material-icons">local_mall</i>
          </a>
          <a className="App-nav-right">
            | <i class="material-icons">add_alert</i>
          </a>
          <a className="App-nav-right">
            | <i class="material-icons">home</i>
          </a>
          <a className="App-nav-right">
            <i class="material-icons">search</i>
          </a>
          <input type="text" className="App-input-right" placeholder="Search" />
          <div class="dropdown">
            | <i className="material-icons">account_circle</i>
            <div class="dropdown-content">
              <RegisterLogin />
            </div>
          </div>
        </React.Fragment>
      </header>
    );
  }
}

export default NavBar;
