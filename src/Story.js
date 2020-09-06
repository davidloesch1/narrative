import React, { useState } from "react";
import { Card, CardText, Collapse, Button } from "reactstrap";

function Story(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onEntered = () =>
    (document.getElementById(`${props.stories.id}_button`).innerHTML = "less");
  const onExiting = () =>
    (document.getElementById(`${props.stories.id}_button`).innerHTML = "more");

  return (
    <Card
      className="border m-1 shadow-sm vw-90 card-container"
      id={props.stories.id}
    >
      <h4>{props.stories.title}</h4>
      <Collapse onExiting={onExiting} onEntered={onEntered} isOpen={isOpen}>
        <CardText id={`${props.stories.id}_text`} >
          {props.stories.plot}
        </CardText>
      </Collapse>
      <Button
        style={{ marginTop: "1rem" }}
        onClick={toggle}
        id={`${props.stories.id}_button`}
      >
        more
      </Button>
    </Card>
  );
}

export default Story;
