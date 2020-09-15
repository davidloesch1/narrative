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
import Create from "./Create";
import { v4 as uuidv4 } from "uuid";

const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:5000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
      users: [],
      stories: [
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: uuidv4(),
          title: "The Joker",
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
    // this.createStory = this.createStory.bind(this)
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

  render() {
    return (
      <div className="App">
        <Router>
          <Header
            user={this.state.user}
            login={this.login}
            logout={this.logout}
            loggedIn={this.state.loggedIn}
          />

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home data={this.state} />}
            />
            <Route
              exact
              path="/login"
              component={() => <Login login={this.login} />}
            />
            <Route
              exact
              path="/signup"
              component={() => (
                <Signup create={this.createUser} />
              )}
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
              component={() => (
                <Create user={this.state.user} create={this.createStory} />
              )}
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
