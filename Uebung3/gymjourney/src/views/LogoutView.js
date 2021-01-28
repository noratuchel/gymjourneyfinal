import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

class LogoutView extends React.Component {
  render() {
    /* Functions and code for usage in or before JSX here */

    return (
      <div>
        <Redirect to="/" />
      </div>
    );
  }
}

export default LogoutView;
