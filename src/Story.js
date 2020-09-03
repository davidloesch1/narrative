import React, { useState } from "react";
import { Card, CardText, Collapse, Button } from "reactstrap";

function Story(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card
      className="border m-1 shadow-sm vw-90 card-container"
      id={props.stories.id}
    >
      <h5>{props.stories.title}</h5>
      <Collapse id={`${props.stories.id}_text`} isOpen={isOpen}>
        <CardText className="card-text-sm" aria-expanded="false">
          {props.stories.plot}
        </CardText>
      </Collapse>
      <div className="footer">
        <Button type="button" onClick={toggle}>
          + Show More
        </Button>
      </div>
    </Card>
  );
}

export default Story;
