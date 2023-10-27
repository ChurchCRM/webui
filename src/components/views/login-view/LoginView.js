import React from "react";
import "./LoginView.scss";
import { Component } from "react";
import { Button, TextField } from "@mui/material";

class LoginView extends Component {
  render() {
    return (
      <div className="main-content">
        <form>
          <div className="card space-bottom">
            <div className="center">
              <div className="title">
                <h1>ChurchCRM</h1>
              </div>
              <h2 className="card-title">Login</h2>
            </div>
            <div className="card-body">
              <TextField
                id="email-field"
                label="E-mail"
                variant="outlined"
                className="field space-bottom"
              />
              <TextField
                id="passwod-field"
                label="Password"
                variant="outlined"
                type="password"
                className="field"
              />
            </div>
            <Button variant="contained" className="primary-main space-top">
              Login
            </Button>
          </div>
          <Button variant="contained" className="secondary-main space-bottom">
            Create new account
          </Button>
          <Button variant="contained" className="secondary-dark">
            Access recover
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginView;
