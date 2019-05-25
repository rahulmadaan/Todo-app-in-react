import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form
        action={this.props.action}
        method={this.props.method}
        className={this.props.className}
      >
        {this.props.body}
      </form>
    );
  }
}
export default Form;
