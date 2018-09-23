import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/navbar";
import MenuBar from "./component/menubar";
import Contents from "./component/contents";
import Footers from "./component/footer";

class App extends Component {
  render() {
    return (
      <div className="App-main">
        <NavBar />
        <MenuBar />
        <Contents />
      </div>
    );
  }
}

export default App;
