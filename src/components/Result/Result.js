import classes from "./Result.module.css";
import React from "react";

const Result = ({ result }) => {
  return (
    <div className={classes.container}>
      <h3>{result}</h3>
    </div>
  );
};

export default Result;
