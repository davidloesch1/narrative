import React, { useState } from "react";
import Story from "./Story";

function Home(props) {
  const stories = props.data.stories.map((el, i) => (
    <Story stories={el} id={i} />
  ));

  return (
    <div className="text-dark">
      {stories}
    </div>
  );
}

export default Home;
