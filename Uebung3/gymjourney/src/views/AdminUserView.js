import {
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteUser, editUser, getUsers } from "../actions/index.js";
import User from "../components/User.js";
import "../styles/private.css";
import { isAdminLoggedIn } from "../utils";

/* A template for a more complex React component  */
class AdminUserView extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {
      redirectToLogout: false,
      deletionCounter: 0,
      showNavBarStatus: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  /* React Class functions here */
  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({ redirectToLogout: true });
  };

  componentDidMount() {
    this.props.getUsers(localStorage.getItem("token"));
  }

  handleDelete(user_id) {
    this.props.deleteUser(localStorage.getItem("token"), user_id);
    this.props.getUsers(localStorage.getItem("token"));
    this.setState({ deletionCounter: this.state.deletionCounter + 1 });
  }

  handleEdit(firstname, surname, email, password, role, user_id) {
    this.props.editUser(
      localStorage.getItem("token"),
      firstname,
      surname,
      email,
      password,
      role,
      user_id
    );
    this.props.getUsers(localStorage.getItem("token"));
    this.setState({ deletionCounter: this.state.deletionCounter + 1 });
  }

  render() {
    /* Functions and code for usage in or before JSX here */
    return (
      <div>
        {this.state.redirectToLogout ? <Redirect to="/" /> : ""}
        {isAdminLoggedIn() ? "" : <Redirect to="/home" />}
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              <img src="./assets/pictures/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              onClick={() =>
                this.setState({
                  showNavBarStatus: !this.state.showNavBarStatus,
                })
              }
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collape navbar-collapse"
              id="navbarResponsive"
              style={{
                display: this.state.showNavBarStatus ? "inline" : "none",
              }}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">
                    Home
                  </a>
                </li>
                {isAdminLoggedIn() ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/adminusers">
                        Users
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/adminregistration">
                        Registration
                      </a>
                    </li>{" "}
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Training
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Ernährung
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Yoga
                      </a>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => this.handleLogout()}
                    href="/#"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ visibility: "hidden" }}>{this.state.deletionCounter}</div>
        <div className="container-fluid padding">
          <div className="welcome">
            <div className="col-12">
              <h1 className="display-4">User</h1>
            </div>
            <hr />
            <div className="col-12"></div>
          </div>
          <div className="col-xs-2 icons">
            <i className="far fa-edit" />
          </div>
        </div>
        <div className="container mt-3  mb-5">
          {this.props.users
            ? this.props.users.map((user, index) => (
                <User
                  key={index}
                  firstname={user.firstname}
                  surname={user.surname}
                  email={user.email}
                  role={user.role}
                  user_id={user._id}
                  handleDeleteCallback={this.handleDelete}
                  handleEditCallback={this.handleEdit}
                />
              ))
            : "loading..."}
        </div>
        <hr className="my-4" />
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-12">
              <h2>Bleib verbunden</h2>
            </div>
            <div className="col-12 social padding">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/?lang=de">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.gmail.com/mail/help/intl/en/about.html?utm_expid=...">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="https://www.instagram.com/?hl=de">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/?gl=DE">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid padding">
            <div className="row text-center">
              <div className="col-md-4">
                <img src="./assets/pictures/logo.png" alt="logo" />
                <hr className="light-first" />
                <p>030 1234567</p>
                <p>email@gymjourney.de</p>
                <p>12345 Berlin</p>
              </div>
              <div className="col-md-4">
                <hr className="light" />
                <h5>Rechtliches</h5>
                <hr className="light" />
                <p>AGB</p>
                <p>Datenschutz</p>
                <p>Impressum</p>
              </div>
              <div className="col-md-4">
                <hr className="light" />
                <h5>Unternehmen</h5>
                <hr className="light" />
                <p>Jobs</p>
                <p>Hilfe und Support</p>
                <p>Presse</p>
              </div>
              <div className="col-12">
                <hr className="light-100" />
                <h5>© gymjourney.de</h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

/* Import Redux State to props here */
const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

/* Import Action methods here  */
export default connect(mapStateToProps, {
  getUsers,
  deleteUser,
  editUser,
})(AdminUserView);
