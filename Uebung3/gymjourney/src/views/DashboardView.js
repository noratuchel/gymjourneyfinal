import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/style.css";

/* A template for a more complex React component  */
class DashboardView extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {
      exampleData: 2,
      showNavBarStatus: false,
    };
  }
  render() {
    let token = localStorage.getItem("token");
    return (
      <>
        {token ? <Redirect to="/home" /> : ""}
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
                  <a className="nav-link" href="/">
                    Gym Journey
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Über uns
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Kontakt
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel id="slides" data-ride="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/pictures/background1.jpeg"
              alt="background"
            />
            <Carousel.Caption>
              <h1 className="display-4">Gym Journey</h1>
              <h3>Teile deine Erfolge mit der Community</h3>
              <a className="link-login" href="/login">
                <Button variant="info">Einloggen</Button>
              </a>
              <Button href="/adminregistration" variant="outline-info">
                Anmelden
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/pictures/background2.jpg"
              alt="background"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/pictures/background3.jpeg"
              alt="background"
            />
          </Carousel.Item>
        </Carousel>
        <div className="container-fluid padding">
          <div className="welcome">
            <div className="col-12">
              <h1 className="display-4">Before, While &amp; After</h1>
            </div>
            <hr />
            <div className="col-12">
              <p className="lead">
                Willkommen bei deiner Gym Journey! Steig ein und zeig uns wie du
                begonnen hast, wie du dich entwickelst und was deine Ziele sind.
                Wir helfen dir daraufhin zu arbeiten.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <FontAwesomeIcon icon={["fas", "child"]} />
              <h3>Training</h3>
              <p>
                Ob im Fitnessstudio oder zu Hause, trainiere so wie du dich am
                wohlsten fühlst und teile deine Erfahrungen mit anderen.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <FontAwesomeIcon icon={["fas", "utensils"]} />
              <h3>Ernährung</h3>
              <p>
                Tausche hilfreiche Ernährungstipps mit der Community aus. Ob
                Muskelaufbau oder Gewichtsreduktion - für jeden ist was dabei.
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <i className="fas fa-street-view" />
              <FontAwesomeIcon icon={["fas", "street-view"]} />
              <h3>Yoga</h3>
              <p>
                Du willst einfach nur entspannen? Dann ist unsere Yoga-Section
                perfekt für dich und vielleicht findest du die ein oder andere
                neue Figur.{" "}
              </p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
        <div className="container-fluid padding">
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
      </>
    );
  }
}

/* Import Redux State to props here */
const mapStateToProps = (state) => ({});

/* Import Action methods here  */
export default connect(mapStateToProps, {})(DashboardView);

library.add(fab, fas, faCheckSquare, faCoffee);
