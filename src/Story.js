import React, { useState } from "react";
import {
  Card,
  CardText,
  Collapse,
  Button,
  Badge,
  CardFooter,
  Col,
  Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown as solidThumbDown,
  faThumbsUp as solidThumbUp,
  faPlus as solidPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsDown as regThumbDown,
  faThumbsUp as regThumbUp,
  faCommentAlt as regComment,
} from "@fortawesome/free-regular-svg-icons";

// const solidThumbUp = <FontAwesomeIcon icon={solidThumbUp}/>
// const solidThumbDown = <FontAwesomeIcon icon={solidThumbDown}/>
// const regThumbUp = <FontAwesomeIcon icon={regThumbUp}/>
// const regThumbDown = <FontAwesomeIcon icon={regThumbDown}/>

function Story(props) {
  let votes = props.story.upvotes - props.story.downvotes;
  let comments = props.story.comments;
  if (comments) {
    comments = comments.length;
    console.log(comments);
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onEntered = () =>
    (document.getElementById(`${props.story.id}_button`).innerHTML = "less");
  const onExiting = () =>
    (document.getElementById(`${props.story.id}_button`).innerHTML = "more");
  const user = props.story.narrator ? (
    <small style={{ fontSize: "x-small" }}>
      {" "}
      Narrator: {props.story.narrator}
    </small>
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
      {/* <FontAwesomeIcon icon={solidThumbDown} />
      <FontAwesomeIcon icon={solidThumbUp} /> */}

      {user}
      <br></br>
      <h4 className="baskerville">{props.story.title}</h4>
      <small>{genres}</small>
      <br></br>
      <CardText id={`${props.story.id}_text`} className="raleway small overflow">
        {props.story.plot}
      </CardText>
      <Row className="footer">
        <Col className="footer-col">
          <FontAwesomeIcon icon={regThumbUp} size="sm" />
          <p
            style={{
              fontSize: "small",
              display: "inline-block",
              textAlign: "center",
              margin: "auto 6px",
            }}
          >
            {votes}
          </p>
          <FontAwesomeIcon icon={regThumbDown} size="sm" />
        </Col>
        <Col className="footer-col">
          <FontAwesomeIcon icon={regComment} size="sm" />
          <p
            style={{
              fontSize: "small",
              display: "inline-block",
              textAlign: "center",
              margin: "0px 6px",
            }}
          >
            {comments}
          </p>
        </Col>
        <Col className="footer-col">
          <FontAwesomeIcon icon={solidPlus} size="sm" />
        </Col>
      </Row>
    </Card>
  );
}

export default Story;
