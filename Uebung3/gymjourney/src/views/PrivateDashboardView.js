import {
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import deLocale from "date-fns/locale/de";
import jwt from "jsonwebtoken";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPost, getPosts } from "../actions/index.js";
import NewPost from "../components/NewPost.js";
import Post from "../components/Post.js";
import "../styles/private.css";
import { isAdminLoggedIn } from "../utils";

/* A template for a more complex React component  */
class PrivateDashboardView extends React.Component {
  /* React Class state */
  constructor(props) {
    super(props);
    this.state = {
      redirectToLogout: false,
      showNewPost: false,
      postCounter: 0,
    };
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  /* React Class functions here */
  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({ redirectToLogout: true });
  };

  handleShowNewPost = () => {
    this.setState({ showNewPost: !this.state.showNewPost });
  };

  handleNewPost(content) {
    console.log("hierr", jwt.decode(localStorage.getItem("token")));
    this.props.createPost(
      localStorage.getItem("token"),
      content,
      jwt.decode(localStorage.getItem("token")).userid,
      jwt.decode(localStorage.getItem("token")).firstname
    );
    this.setState({ postCounter: this.state.postCounter + 1 });
    this.props.getPosts(localStorage.getItem("token"));
    setTimeout(() => {
      this.props[0].history.go(0);
    }, 1000);
  }

  componentDidMount() {
    this.props.getPosts(localStorage.getItem("token"));
  }

  render() {
    /* Functions and code for usage in or before JSX here */
    return (
      <div>
        {this.state.redirectToLogout ? <Redirect to="/" /> : ""}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home | Gym Journey</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link href="../styles/style.css" rel="stylesheet" />
        <link href="../styles/private.css" rel="stylesheet" />
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
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collape navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
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
                      <a className="nav-link" href="#">
                        Training
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Ernährung
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Yoga
                      </a>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <a className="nav-link" onClick={() => this.handleLogout()}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel id="slides" data-ride="carousel">
          <Carousel.Item>
            <img src="./assets/pictures/training1.jpg" alt="training" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./assets/pictures/yoga1.jpg" alt="yoga" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./assets/pictures/ernaehrung1.jpg" alt="ernährung" />
          </Carousel.Item>
        </Carousel>
        <div style={{ visibility: "hidden" }}>{this.state.postCounter}</div>

        <div className="container-fluid padding">
          <div className="welcome">
            <div className="col-12">
              <h1 className="display-4">Neue Posts</h1>
            </div>
            <hr />
            <div className="col-12">
              <p className="lead">
                Siehe die neusten Posts zum Thema Training, Yoga und Ernährung
              </p>
            </div>
          </div>
          <div className="col-xs-2 icons">
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => this.handleShowNewPost()}
            />
          </div>
        </div>
        <div className="container mt-3  mb-5">
          {this.state.showNewPost ? (
            <NewPost handleCreatePostCallback={this.handleNewPost} />
          ) : (
            ""
          )}
          {this.props.posts
            ? this.props.posts
                .sort((a, b) =>
                  Date.parse(b.date) > Date.parse(a.date) ? 1 : -1
                )
                .map((post) => (
                  <Post
                    content={post.content}
                    posttime={formatDistanceToNow(Date.parse(post.date), {
                      includeSeconds: true,
                      locale: deLocale,
                    })}
                    firstname={post.firstname}
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
  posts: state.postsReducer.posts,
});

/* Import Action methods here  */
export default connect(mapStateToProps, {
  getPosts,
  createPost,
})(PrivateDashboardView);
