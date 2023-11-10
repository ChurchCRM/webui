import React from "react";
import "./ForgotPasswordView.scss";
import { Component } from "react";
import {
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

class ForgotPasswordView extends Component {
  render() {
    return (
      <div className="main-content">
        <form>
          <div className="card space-bottom">
            <div className="center space-bottom">
              <Typography variant="h4" component="h1">
                <b>Church</b>CRM
              </Typography>

              <Typography variant="h6" component="h2">
               Reset your password
              </Typography>
            </div>
            <div className="card-body">
              <TextField
                id="email-field"
                label="E-mail/Username"
                variant="outlined"
                className="field space-bottom"
              />
            </div>
            <Button variant="contained" className="primary-main space-top">
              Go
            </Button>
          </div>
          <div className="space-bottom">
            <Link to="/">Back</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPasswordView;