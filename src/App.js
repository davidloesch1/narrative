import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { Lost } from "./Lost";
import Header from "./Header";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import VisibleStoriesList from "./containers/HomeContainer";
import NewStory from "./create/NewStory";
import { connect } from "react-redux";

const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:5000";

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn
})

const App = (props) => {
  console.log(props);
  // componentDidMount() {
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
  // }

  // logout = (event) => {
  //   event.preventDefault();
  //   console.log("logging out");
  // axios.post("/auth/logout").then((response) => {
  //   console.log(response.data);
  //   if (response.status === 200) {
  //     this.setState({
  //       loggedIn: false,
  //       user: null,
  //     });
  //   }
  // });
  //   this.setState({
  //     loggedIn: false,
  //     user: null,
  //   });
  // };

  // login = (username, password) => {
  //   console.log("loggin in!");
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
  //   this.setState({
  //     loggedIn: true,
  //     user: "David",
  //   });
  //   this.props.history.push("/");
  // };


  const createStory = (storyObj) => {
    let arr = props.stories;
    arr.unshift(storyObj);
    this.setState({
      stories: arr,
    });
  };

  const createUser = (userObj) => {
    let arr = props.users;
    arr.unshift(userObj);
    this.setState({
      users: arr,
    });
  };

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={() => <VisibleStoriesList />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/signup" component={() => <Signup />} />
          <PrivateRoute
            exact
            path="/dashboard"
            authed={props.loggedIn}
            component={() => <Dashboard />}
          />
          <PrivateRoute
            exact
            path="/create"
            authed={props.loggedIn}
            component={() => <NewStory />}
          />

          {/* this part isn't working just yet. the goal is to make it so that a user can't get to the signup page if they are logged in */}
          <PrivateRoute
            exact
            path="/signup"
            authed={!props.loggedIn}
            component={() => <Signup />}
          />
          <Route path="*" component={Lost} />
        </Switch>
      </Router>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(App));
