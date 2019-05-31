import React, { Component } from "react";

class Header extends Component {
  render() {
    return <header class={this.props.class}>{this.props.body}</header>;
  }
}
export default Header;
