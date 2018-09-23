import React, { Component } from "react";
import "../App.css";
import MenuItem from "./menuitem";

class MenuBar extends Component {
  render() {
    return (
      <header className="App-menu">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </header>
    );
  }
}

export default MenuBar;
