import React, { Component } from "react";

import "./styles.scss";

class ListViewCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listCard">
        <img src={this.props.imgSrc} className="listCardImg" alt="place" />

        <h1 className="listCardTitle">{this.props.title}</h1>

        <p className="iconLine">
          <img src={"images/heart.svg"} className="icon" alt="like" />
          <img
            src={"images/message-square.svg"}
            className="icon"
            alt="message"
          />
        </p>
      </div>
    );
  }
}

export default ListViewCard;
