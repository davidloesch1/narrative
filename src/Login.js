import React, { useState } from "react";
import "./App.css";
import auth from "./auth";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { login } from "./redux/actions/userActions"
import { loggedIn } from "./redux/actions/loggedInActions"

const mapStateToProps = (state) => ({
  user: state.user,
});

const actionCreators = {
    login,
    loggedIn
}

const Login = (props) => {
  //   console.log(auth.isAuthenticated());
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleClick = async () => {
    // console.log(props.login({ username, password }));
    //   props.login(username, password)
    await props.login({ username, password });
    props.loggedIn()
    // username = setUsername("");
    // password = setPassword("");
  };

  return (
    <div className="border m-1 shadow-sm create-container">
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </FormGroup>
        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Login);
