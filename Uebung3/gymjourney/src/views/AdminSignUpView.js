import {
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux"; // Verbindung zu Reducer/Speicher
import { Redirect } from "react-router-dom";
import { signupUser } from "../actions/index.js";
import "../styles/form.css";
import "../styles/style.css";
import { isAdminLoggedIn } from "../utils/index";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      showNavBarStatus: false,
    };
  }
  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({ redirectToLogout: true });
  };

  // event   { target: { name: "email", value: "r"   }  }
  rewriteValue = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSignUp = () => {
    // == coalesence/guessing/schätzen  "5" == 5 TRUE  "5" === 5 FALSE daher immer === benutzen
    // Gefüllter String ist truthy und leerer String ist falsy
    if (
      this.state.firstname &&
      this.state.lastname &&
      this.state.email &&
      this.state.password &&
      this.state.passwordConfirm &&
      this.state.password === this.state.passwordConfirm
    ) {
      this.props.signupUser(
        localStorage.getItem("token"),
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.password
      );
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleSignUp();
    }
  };

  render() {
    return (
      <div>
        {this.props.signedUpUser ? <Redirect to="/login" /> : ""}
        {isAdminLoggedIn() ? "" : <Redirect to="/home" />}

        <nav className="navbar navbar-expand-md navbar-light bg-light stick-top">
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
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Gym Journey
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
                <li className="nav-item active">
                  <a className="nav-link" onClick={() => this.handleLogout()}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="container"
          style={{
            backgroundImage: "url(./assets/pictures/background2.jpg)",
            backgroundSize: "cover",
            height: "500px",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-6 mb-5">
              <div id="ui">
                <h2 className="text-center">Registrieren</h2>
                <form className="form-group" action="privatepage.html">
                  <label>Bitte Felder ausfüllen</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="Vorname"
                    value={this.state.firstname}
                    onChange={(event) => this.rewriteValue(event)}
                  />
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Nachname"
                    value={this.state.lastname}
                    onChange={(event) => this.rewriteValue(event)}
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email-Adresse"
                    value={this.state.email}
                    onChange={(event) => this.rewriteValue(event)}
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Passwort"
                    value={this.state.password}
                    onChange={(event) => this.rewriteValue(event)}
                  />
                  <input
                    type="password"
                    name="passwordConfirm"
                    className="form-control"
                    placeholder="Passwort erneut"
                    value={this.state.passwordConfirm}
                    onChange={(event) => this.rewriteValue(event)}
                    onKeyDown={(event) => this.handleKeyDown(event)}
                  />
                  <input
                    name="submit"
                    defaultValue="Account anlegen"
                    id="submit"
                    className="btn btn-info btn-block btn-lg"
                    onClick={() => this.handleSignUp()}
                  />
                  {this.props.signUpError ? (
                    <p style={{ color: "red" }}>
                      Registrieren ist fehlgeschlagen.
                    </p>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
            <div className="col-lg-3" />
          </div>
        </div>
        <div className="container-fluid padding mt-5">
          <div className="row text-center padding">
            <div className="col-12">
              <h2>Bleib verbunden</h2>
            </div>
            <div className="col-12 social padding ">
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
  signedUpUser: state.usersReducer.signedUpUser,
  signUpError: state.usersReducer.fetchingSignupError,
});

/* Import Action methods here  */
/* LoginView.props.loginUser  */
export default connect(mapStateToProps, { signupUser })(LoginView);
