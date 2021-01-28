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
import { loginUser } from "../actions/index.js";
import "../styles/form.css";
import "../styles/style.css";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToLogin: false,
    };
  }

  // event   { target: { name: "email", value: "r"   }  }
  rewriteValue = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleLogin = () => {
    // == coalesence/guessing/schätzen  "5" == 5 TRUE  "5" === 5 FALSE daher immer === benutzen
    // Gefüllter String ist truthy und leerer String ist falsy
    if (this.state.email && this.state.password) {
      this.props.loginUser(this.state.email, this.state.password);
      this.setState({ redirectToLogin: true });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleLogin();
    }
  };

  render() {
    return (
      <div>
        {this.state.redirectToLogin ? <Redirect to="/home" /> : ""}
        <title>Login | Gym Journey</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link href="../styles/style.css" rel="stylesheet" />
        <link href="../styles/form.css" rel="stylesheet" />
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="./assets/pictures/logo.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collape navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Gym Journey
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Über uns
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kontakt
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Login
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
              <div id="ui" className="ui">
                <h2 className="text-center">Login</h2>
                <div className="row">
                  <div className="col-lg-12">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      value={this.state.email}
                      onChange={(event) => this.rewriteValue(event)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label>Passwort</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Passwort"
                      value={this.state.password}
                      onChange={(event) => this.rewriteValue(event)}
                      onKeyDown={(event) => this.handleKeyDown(event)}
                    />
                  </div>
                  {/* 
                    email eingeben :check:
                    password eingeben :check:
                    einloggen drücken 
                    loginUser ausführen mit den daten aus dem state
                    */}
                  <input
                    name="submit"
                    defaultValue="Einloggen"
                    id="submit"
                    className="btn btn-info btn-block btn-lg"
                    onClick={() => this.handleLogin()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-12 mt-5">
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
        {/*- Footer */}
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
  /*   tourProps: state.tourReducer.tours,
  currentUser: state.userReducer.currentUser, */
});

/* Import Action methods here  */
/* LoginView.props.loginUser  */
export default connect(mapStateToProps, { loginUser })(LoginView);
