import React from "react";
import { Link } from "react-router-dom";

export const Lost = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>
        dude, where are you going? You should go <Link to={"/"}>home</Link>
      </p>
    </>
  );
};
