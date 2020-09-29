import React from "react";
import Story from "./Story";
import { useParams } from "react-router-dom";

const Home = ({stories, user, upvote, downvote}) => {
  let storiesArray = Object.values(stories);
  console.log(storiesArray);
  return (
    <div className="text-dark">
      {storiesArray.map((story) => {
        console.log(story);
        return <Story key={story.id} story={story} user={user} upvote={upvote} downvote={downvote} />;
      })}
    </div>
  );
};

export default Home;
