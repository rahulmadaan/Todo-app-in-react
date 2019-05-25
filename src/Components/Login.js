import React, { Component } from "react";
import { Link } from "react-router-dom";

import Form from "./base-components/Form.js";
import Input from "./base-components/Input.js";
import Label from "./base-components/Label.js";
import Header from "./base-components/Header.js";
import "../Sytlesheets/login.css";

class Login extends Component {
  header() {
    return (
      <Header class={"mingleThemeHeader"} body={"Welcome To What TO DO"} />
    );
  }
  title() {
    return <h2>Sign In</h2>;
  }
  getForm() {
    return (
      <div className="signInBox">
        {this.title()}
        <Form
          action={"/login"}
          method={"POST"}
          className="login-form"
          body={
            <div>
              <Label body="Username : &#x270D;" />
              <br />
              <Input
                type="text"
                name="username"
                className="input-field"
                placeholder="Enter your username"
              />
              <br />
              <Label body={"Password:"} />
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
              />
              <br />
              <br />
              <Input type="submit" value="Sign In" className="submit-btn" />
              <h4>No Account?? Don't worry</h4>
              <a href="/signup.html">Sign up</a>
            </div>
          }
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="mingleThemeHeader">{this.header()}</div>
        <div className="main-page">{this.getForm()}</div>
      </div>
    );
  }
}
export default Login;
