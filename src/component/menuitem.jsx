import React, { Component } from "react";
import "../App.css";

class MenuItem extends Component {
  state = {};
  render() {
    return (
      <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="material-icons">arrow_drop_down</i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  }
}

export default MenuItem;
