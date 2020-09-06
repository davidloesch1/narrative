import React, { useState } from "react";
import { Card, CardText, Collapse, Button } from "reactstrap";

function Story(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = async () => {
    await setIsOpen(!isOpen)
    changeButton()
  };

  const changeButton = () => {
    let button = document.getElementById(`${props.stories.id}_button`)
    button.innerHTML = isOpen ? "more" : "less"
  }
  return (
    <Card
      className="border m-1 shadow-sm vw-90 card-container"
      id={props.stories.id}
    >
      <h4>{props.stories.title}</h4>
      <Collapse isOpen={isOpen} id={`${props.stories.id}_text`}>
        <CardText>{props.stories.plot}</CardText>
      </Collapse>
      <Button onClick={toggle} id={`${props.stories.id}_button`}>more</Button>
    </Card>
  );
}

export default Story;
