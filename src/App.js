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
import Create from "./Create";

const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:5000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      users: {
        user_1: { id: "user_1", username: "David" },
        user_2: { id: "user_2", username: "Chelsea" },
      },
      comments: {
        comment_1: {
          id: "comment_1",
          parentId: "story_1",
          commenter: "user_2",
          comment: "Lorem Ipssum this is a comment!",
          childComments: ["comments_2"],
          upvotes: 0,
          downvotes: 0,
        },
        comment_2: {
          id: "comment_2",
          parentId: "story_1",
          commenter: "user_2",
          comment: "Lorem Ipssum this is a comment!",
          childComments: [""],
          upvotes: 0,
          downvotes: 0,
        },
      },
      genres: {
        genre_Action: "Action",
        genre_Adventure: "Adventure",
      },
      stories: {
        story_1: {
          id: "story_1",
          narrator: "user_1",
          title: "The Joker",
          genres: ["genre_Action", "genre_Adventure"],
          upvotes: 0,
          downvotes: 0,
          chaptersSubmitted: ["chap_10", "chap_11"],
          selectedChapters: ["chap_1", "chap_2", "chap_3", "chap_4"],
          comments: ["comment_1"],
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        story_2: {
          id: "story_2",
          narrator: "1",
          title: "The Joker 2",
          genres: ["genre_Action", "genre_Adventure"],
          upvotes: 0,
          downvotes: 0,
          chaptersSubmitted: ["chap_10", "chap_11"],
          selectedChapters: ["chap_1", "chap_2", "chap_3", "chap_4"],
          comments: ["comment_1"],
          plot:
            "Lorem ipsom is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      },
      chapters: {
        chap_1: {
          id: "chap_1",
          author: "user_2",
          content: "Lorem Ipsum I'm a chapter!!!",
          comments: ["comment_3", "comment_4"],
          story: "story_1",
          accepted: false,
          altNextChapters: ["chap_6", "chap_7"],
          prevChapter: null,
          nextChapter: 'chap_2',
          upvotes: 0,
          downvotes: 0,
        },
        chap_2: {
          id: "chap_2",
          author: "user_2",
          content: "Lorem Ipsum I'm a chapter!!!",
          comments: ["comment_3", "comment_4"],
          story: "story_1",
          accepted: false,
          altNextChapters: ["chap_6", "chap_7"],
          prevChapter: "chap_1",
          nextChapter: 'chap_3',
          upvotes: 0,
          downvotes: 0,
        },
        chap_3: {
          id: "chap_3",
          author: "user_2",
          content: "Lorem Ipsum I'm a chapter!!!",
          comments: ["comment_3", "comment_4"],
          story: "story_1",
          accepted: false,
          altNextChapters: ["chap_6", "chap_7"],
          prevChapter: "chap_2",
          nextChapter: 'chap_4',
          upvotes: 0,
          downvotes: 0,
        },
        chap_4: {
          id: "chap_4",
          author: "user_2",
          content: "Lorem Ipsum I'm a chapter!!!",
          comments: ["comment_3", "comment_4"],
          story: "story_1",
          accepted: false,
          altNextChapters: ["chap_6", "chap_7"],
          prevChapter: "chap_3",
          nextChapter: 'chap_5',
          upvotes: 0,
          downvotes: 0,
        },
        chap_6: {
          id: "chap_6",
          author: "user_2",
          content: "Lorem Ipsum I'm a chapter!!!",
          comments: ["comment_3", "comment_4"],
          story: "story_1",
          accepted: false,
          altNextChapters: ["chap_6", "chap_7"],
          prevChapter: "chap_4",
          nextChapter: 'chap_7',
          upvotes: 0,
          downvotes: 0,
        },
      },
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
              component={() => (
                <Create user={this.state.user} create={this.createStory} />
              )}
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
