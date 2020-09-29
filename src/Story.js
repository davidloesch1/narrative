import React from "react";
import { Card, CardText, Badge, Col, Row } from "reactstrap";
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

const Story = (props) => {
  console.log(props);
  let story = props.story;
  let user = props.user;

  let votes = story.upvotes - story.downvotes;
  let comments = story.comments;
  if (comments) {
    comments = comments.length;
  }

  const narrator = story.narrator ? (
    <small style={{ fontSize: "x-small" }}>Narrator: {story.narrator}</small>
  ) : null;

  let genres = story.genres ? story.genres : null;
  if (genres) {
    genres = Object.keys(genres).filter((key) => genres[key]);
    genres = genres.map((element) => {
      return <Badge style={{ margin: "1px", padding: "3px" }}>{element}</Badge>;
    });
  }

  let upvote = () => {
    if (user) {
      props.upvote(story.id, user);
    }
    else{
      alert("must be signed in to vote!")
    }
  };
  let downvote = () => {
    if (user) {
      props.downvote(story.id, user);
    }
    else{
      alert("must be signed in to vote!")
    }
  };
  return (
    <Card className="border m-1 shadow-sm vw-90 card-container" id={story.id}>
      {narrator}
      <br></br>
      <h4 className="baskerville">{story.title}</h4>
      <small>{genres}</small>
      <br></br>
      <CardText id={`${story.id}_text`} className="raleway small overflow">
        {story.plot}
      </CardText>
      <Row className="footer">
        <Col className="footer-col">
          <FontAwesomeIcon icon={regThumbUp} onClick={upvote} size="sm" />
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
          <FontAwesomeIcon icon={regThumbDown} onclick={downvote} size="sm" />
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
};

export default Story;
