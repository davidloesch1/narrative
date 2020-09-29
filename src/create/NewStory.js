import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";
import { newStory } from "../redux/actions/storyActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.user,
});
const actionCreator = {
  newStory,
};

const NewStory = (props) => {
  console.log(props)
  let [title, setTitle] = useState("");
  let [plot, setPlot] = useState("");
  let [genres, setGenres] = useState({});

  const handlechange = (e) => {
    setGenres({ ...genres, [e.target.name]: e.target.checked });
  };

  const submit = () => {
    let story = {
      title: title,
      plot: plot,
      genres: genres,
      narrator: props.user,
    };
    console.log(story)
    props.newStory(story);
  };

  let checkboxes = [
    {
      name: "action",
      key: "action",
      label: "Action",
    },
    {
      name: "crime",
      key: "crime",
      label: "Crime",
    },
    {
      name: "romance",
      key: "romance",
      label: "Romance",
    },
    {
      name: "science-fiction",
      key: "scienceFiction",
      label: "Science Fiction",
    },
    {
      name: "western",
      key: "western",
      label: "Western",
    },
    {
      name: "humor",
      key: "humor",
      label: "Humor",
    },
    {
      name: "Mmstery",
      key: "mystery",
      label: "Mystery",
    },
    {
      name: "thriller",
      key: "thriller",
      label: "Thriller",
    },
    {
      name: "historical-fiction",
      key: "historicalFiction",
      label: "Historical Fiction",
    },
  ];

  let checkboxArray = checkboxes.map((el) => (
    <FormGroup check>
      <Label check key={el.key}>
        <Input
          checked={genres[el.name]}
          type="checkbox"
          onChange={handlechange}
          value={el.label}
          name={el.name}
        />{" "}
        {el.label}
      </Label>
    </FormGroup>
  ));

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Crows and Cowards"
            />
          </FormGroup>
          <FormGroup>
            <Label for="plot">Plot</Label>
            <Input
              type="textarea"
              name="plot"
              id="plot"
              value={plot}
              onChange={(e) => setPlot(e.target.value)}
              placeholder="In a small town, not far ..."
            />
          </FormGroup>
          {checkboxArray}
        </Form>
      </div>
      <Button className="mt-auto ml-auto mr-auto" onClick={submit}>
        Submit
      </Button>
    </div>
  );
};

export default withRouter(connect(mapStateToProps, actionCreator)(NewStory));
