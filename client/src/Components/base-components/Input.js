import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Sytlesheets/main.css";

class Input extends Component {
  dummy() {}
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          value={this.props.value}
          className={this.props.className}
          placeholder={this.props.placeholder}
          onClick={this.props.onClick || this.dummy()}
        />
      </div>
    );
  }
}
export default Input;
