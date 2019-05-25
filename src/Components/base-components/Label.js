import React, { Component } from "react";
import "../../Sytlesheets/main.css";

class Label extends Component {
  getClass() {
    if (this.props.className) {
      return this.props.className;
    }
  }
  render() {
    return (
      <label className={this.getClass.bind(this)}>{this.props.body}</label>
    );
  }
}
export default Label;
