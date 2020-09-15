import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";

class Create extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      plot: "",
      genre: "",
      narrator: props.user,
    };
  }
  handlchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const submit = () => {
      this.props.create(this.state);
      this.props.history.push("/");
    };

    // if (this.state.redirect) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="full-height">
        <div className="border m-1 shadow-sm create-container grow">
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handlchange}
                placeholder="Crows and Cowards"
              />
            </FormGroup>
            <FormGroup>
              <Label for="plot">Plot</Label>
              <Input
                type="textarea"
                name="plot"
                id="plot"
                value={this.state.plot}
                onChange={this.handlchange}
                placeholder="In a small town, not far ..."
              />
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Action
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Mystery
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Thriller
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Romance
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Comedy
              </Label>
            </FormGroup>
          </Form>
        </div>
        <Button className="mt-auto ml-auto mr-auto" onClick={submit}>
          Submit
        </Button>
      </div>
    );
  }
}

export default withRouter(Create);
