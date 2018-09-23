import React, { Component } from "react";

class RegisterLogin extends Component {
  state = {};
  render() {
    return (
      <div className="App-register-login">
        <form className="App-register-login-form">
          <div class="container">
            <p>Please fill in this form to create an account.</p>
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />

            <label>
              <input type="checkbox" checked="checked" name="remember" />
              Remember me
            </label>

            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>
            </p>

            <div className="clearfix">
              <button type="submit" className="App-signup-btn signupbtn">
                Sign Up
              </button>
              <button type="button" className="cancelbtn">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterLogin;
