import React from "react";
import Story from "./Story";

const Home = ({ stories }) => {
  let storiesArray = Object.values(stories);
  console.log(storiesArray);
  return (
    <div className="text-dark">
      {storiesArray.map((story) => {
        console.log(story);
        return <Story key={story.id} story={story} />;
      })}
    </div>
  );
};

export default Home;
