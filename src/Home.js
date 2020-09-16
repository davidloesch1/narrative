import React from "react";
import Story from "./Story";

function Home(props) {
  const stories = props.data.stories.map((el) => (
    <Story story={el} id={el.id} key={el.id} />
  ));

  return (
    <div className="text-dark">
      {stories}
    </div>
  );
}

export default Home;
