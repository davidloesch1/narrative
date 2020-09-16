import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";

class Create extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      plot: "",
      genres: {},
      narrator: props.user,
    };
  }
  handlechange = (e) => {
    if (e.target.type === "checkbox") {
      let name = e.target.value
      let checked = e.target.checked
      let genres = this.state.genres
      genres[name] = checked
      this.setState({
        genres: genres
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    const submit = () => {
      this.props.create(this.state);
      this.props.history.push("/");
    };

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
                onChange={this.handlechange}
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
                onChange={this.handlechange}
                placeholder="In a small town, not far ..."
              />
            </FormGroup>
            <Row>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Action"
                    />
                    Action
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Crime"
                    />{" "}
                    Crime
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Fantasy"
                    />{" "}
                    Fantasy
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Romance"
                    />{" "}
                    Romance
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Science Fiction"
                    />{" "}
                    Science Fiction
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Western"
                    />{" "}
                    Western
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Humor"
                    />{" "}
                    Humor
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Mystery"
                    />{" "}
                    Mystery
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Thriller"
                    />{" "}
                    Thriller
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={this.handlechange}
                      value="Historical Fiction"
                    />{" "}
                    Historical Fiction
                  </Label>
                </FormGroup>
              </Col>
            </Row>
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
