import React, { useState } from "react";

function Home(props) {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>hello {props.user.user}</p>
    </div>
  );
}

export default Home;
