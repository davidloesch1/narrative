import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { Lost } from "./Lost";
import Header from "./Header";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import VisibleStoriesList from "./containers/VisibleStoriesList";
import NewStory from "./create/NewStory";

const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:5000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
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
    this.props.history.push("/");
  };

  createStory = (storyObj) => {
    let arr = this.state.stories;
    arr.unshift(storyObj);
    this.setState({
      stories: arr,
    });
  };

  createUser = (userObj) => {
    let arr = this.state.users;
    arr.unshift(userObj);
    this.setState({
      users: arr,
    });
  };

  upvote = (id) => {
    this.setState((prevState) => ({}));
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Header
            user={this.state.user}
            login={this.login}
            logout={this.logout}
            loggedIn={this.state.loggedIn}
          />

          <Switch>
            <Route exact path="/" component={() => <VisibleStoriesList />} />
            <Route
              exact
              path="/login"
              component={() => <Login login={this.login} />}
            />
            <Route
              exact
              path="/signup"
              component={() => <Signup create={this.createUser} />}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              authed={this.state.loggedIn}
              component={() => <Dashboard user={this.state.user} />}
            />
            <PrivateRoute
              exact
              path="/create"
              authed={this.state.loggedIn}
              component={() => <NewStory />}
            />

            {/* this part isn't working just yet. the goal is to make it so that a user can't get to the signup page if they are logged in */}
            <PrivateRoute
              exact
              path="/signup"
              authed={!this.state.loggedIn}
              component={() => <Signup />}
            />
            <Route path="*" component={Lost} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
