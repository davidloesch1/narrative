import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { Lost } from "./Lost";
import Header from "./Header";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:5000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
    };
  }

  componentDidMount() {
    // axios.get("/auth/user").then((response) => {
    //   console.log(response.data);
    //   if (!!response.data.user) {
    //     console.log("THERE IS A USER");
    //     this.setState({
    //       loggedIn: true,
    //       user: response.data.user,
    //     });
    //   } else {
    //     this.setState({
    //       loggedIn: false,
    //       user: null,
    //     });
    //   }
    // });
  }

  logout = (event) => {
    event.preventDefault();
    console.log("logging out");
    // axios.post("/auth/logout").then((response) => {
    //   console.log(response.data);
    //   if (response.status === 200) {
    //     this.setState({
    //       loggedIn: false,
    //       user: null,
    //     });
    //   }
    // });
    this.setState({
      loggedIn: false,
      user: null,
    });
  };

  login = (username, password) => {
    console.log("loggin in!");
    // axios
    //   .post("/auth/login", {
    //     username,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       // update the state
    //       this.setState({
    //         loggedIn: true,
    //         user: response.data.user,
    //       });
    //     }
    //   });
    this.setState({
      loggedIn: true,
      user: "David",
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header user={this.state} login={this.login} logout={this.logout} />

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home user={this.state} />}
            />
            <Route
              exact
              path="/login"
              component={() => <Login login={this.login} />}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              authed={this.state.loggedIn}
              component={() => <Dashboard user={this.state.user} />}
            />
            <Route exact path="/signup" component={Signup} />
            <Route path="*" component={Lost} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
