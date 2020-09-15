import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Signup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: null,
      password: null,
    };
  }
  handlchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const submit = () => {
        this.props.create(this.state)
    };
    return (
      <div className="border m-1 shadow-sm create-container">
        <Form>
          <FormGroup>
            <Label for="title">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handlchange}
              placeholder="username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="plot">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlchange}
              placeholder="password"
            />
          </FormGroup>
          <Button onClick={submit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup