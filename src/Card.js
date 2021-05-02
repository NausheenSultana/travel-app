import React, { Component } from "react";

import "./styles.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <input
          aria-label="select"
          type="checkbox"
          className={"oval"}
          onChange={(e) => this.props.checkboxSelect(e)}
        />
        <img src={this.props.imgSrc} className="tileImg" alt="place" />
        {this.props.capsuleList.map((place) => (
          <span className="capsule">{place}</span>
        ))}
        <h1 className="card-title">{this.props.title}</h1>
        <p className="card-content">{this.props.desc}</p>
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

export default Card;
