import React, { useState } from "react";
import { Card, CardText, Collapse, Button, Badge } from "reactstrap";

function Story(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onEntered = () =>
    (document.getElementById(`${props.story.id}_button`).innerHTML = "less");
  const onExiting = () =>
    (document.getElementById(`${props.story.id}_button`).innerHTML = "more");
  const user = props.story.narrator ? (
    <small> By: {props.story.narrator}</small>
  ) : null;
  let genres = props.story.genres ? props.story.genres : null;
  if (genres) {
    genres = Object.keys(genres).filter((key) => genres[key]);
    genres = genres.map((element) => {
      return <Badge style={{ margin: "1px", padding: "3px" }}>{element}</Badge>;
    });
  }

  return (
    <Card
      className="border m-1 shadow-sm vw-90 card-container"
      id={props.story.id}
    >
      {user}
      <h4>{props.story.title}</h4>
      <small>{genres}</small>
      <br></br>
      <Collapse onExiting={onExiting} onEntered={onEntered} isOpen={isOpen}>
        <CardText id={`${props.story.id}_text`}>{props.story.plot}</CardText>
      </Collapse>
      <Button
        style={{ marginTop: "1rem" }}
        onClick={toggle}
        id={`${props.story.id}_button`}
      >
        more
      </Button>
    </Card>
  );
}

export default Story;
