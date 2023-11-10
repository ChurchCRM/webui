import React from "react";
import "./LoginView.scss";
import { Component } from "react";
import {
  Typography,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

class LoginView extends Component {
  render() {
    const label = {
      inputProps: { "aria-label": "Remember Me", span: "Remember Me" },
    };

    return (
      <div className="main-content">
        <form>
          <div className="card space-bottom">
            <div className="center space-bottom">
              <Typography variant="h4" component="h1">
                <b>Church</b>CRM
              </Typography>

              <Typography variant="h6" component="h2">
                Please login
              </Typography>
            </div>
            <div className="card-body">
              <TextField
                id="email-field"
                label="E-mail/Username"
                variant="outlined"
                className="field space-bottom"
              />
              <TextField
                id="passwod-field"
                label="Password"
                variant="outlined"
                type="password"
                className="field space-bottom"
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember Me"
                />
              </FormGroup>
            </div>
            <Button variant="contained" className="primary-main space-top">
              Signin
            </Button>
          </div>
          <div className="space-bottom">
            <Link to="/forgot-password">I forgot my password</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginView;
