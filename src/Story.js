import React, { useState } from "react";
import { Card, CardText, Collapse, Button } from "reactstrap";

function Story(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onEntered = () =>
    (document.getElementById(`${props.story.id}_button`).innerHTML = "less");
  const onExiting = () =>
    (document.getElementById(`${props.story.id}_button`).innerHTML = "more");
  const user = props.story.narrator ? <small> Narrator: {props.story.narrator}</small> : null
  return (
    <Card
      className="border m-1 shadow-sm vw-90 card-container"
      id={props.story.id}
    >
      <h4>{props.story.title}</h4>
      {user}
      <Collapse onExiting={onExiting} onEntered={onEntered} isOpen={isOpen}>
        <CardText id={`${props.story.id}_text`} >
          {props.story.plot}
        </CardText>
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
