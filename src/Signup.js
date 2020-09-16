import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Signup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const submit = () => {
      this.props.create(this.state);
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
              value={this.state.username}
              onChange={this.handlechange}
              placeholder="username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlechange}
              placeholder="password"
            />
          </FormGroup>
          <Button onClick={submit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
