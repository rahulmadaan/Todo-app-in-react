import React, { Component } from "react";
import "../../Sytlesheets/main.css";

class Input extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        className={this.props.className}
        placeholder={this.props.placeholder}
      />
    );
  }
}
export default Input;
