import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./styles/App.css";
import { isLoggedIn } from "./utils";
import AdminSignUp from "./views/AdminSignUpView";
import AdminUserView from "./views/AdminUserView";
// Alle Components/Views importieren
import Dashboard from "./views/DashboardView.js";
import Login from "./views/LoginView.js";
import Logout from "./views/LogoutView.js";
import PrivateDashboard from "./views/PrivateDashboardView.js";

const history = createBrowserHistory();

function App() {
  return (
    // ROUTE mir App auf /dashboard
    <div className="App">
      <Router history={history}>
        <Route
          exact
          path="/home"
          render={(...props) =>
            isLoggedIn() ? (
              <PrivateDashboard {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route exact path="/" render={(...props) => <Dashboard {...props} />} />
        <Route
          exact
          path="/login"
          render={(...props) => <Login {...props} />}
        />
        <Route
          exact
          path="/logout"
          render={(...props) => <Logout {...props} />}
        />

        {/*        <Route
          exact
          path="/adminregistration"
          render={(...props) => <AdminSignUp {...props} />}
        /> */}
        <Route exact path="/adminregistration" component={AdminSignUp} />
        <Route
          exact
          path="/adminusers"
          render={(...props) => <AdminUserView {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
