import React, { Component } from "react";

class ProductItem extends Component {
  state = {};
  render() {
    return (
      <div className="App-item hoverable">
        <div className="gallery">
          <a target="_blank" href="mitticool_Kadhai.png">
            <img src="./mitticool_Kadhai.png" width="300" height="200" />
          </a>
          <div class="desc">Add a description of the image here</div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
