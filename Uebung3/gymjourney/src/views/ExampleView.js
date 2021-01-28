import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

/* import {
  getAllTours,
  getSingleUserById,
  getSingleGuidesTours,
} from "../actions"; */

/* A template for a more complex React component  */
class ExampleView extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {
      exampleData: 2,
    };
  }

  /* React Class functions here */
  handleSomething = () => {
    // do something
  };

  render() {
    /* Functions and code for usage in or before JSX here */
    return <div>{/* JSX Code here */}</div>;
  }
}

/* Import Redux State to props here */
const mapStateToProps = (state) => ({
  /*   tourProps: state.tourReducer.tours,
  currentUser: state.userReducer.currentUser, */
});

/* Import Action methods here  */
export default connect(mapStateToProps, {
  /*   getAllTours,
  getSingleUserById,
  getSingleGuidesTours, */
})(ExampleView);
