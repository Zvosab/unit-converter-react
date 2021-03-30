import React, { useEffect, useState } from "react";
import UserInput from "../Input/Input";
import LengthDropdown from "../Dropdowns/LengthDropdown";
import Result from "../Result/Result";
import classes from "./Length.module.css";

const Length = () => {
  const [lengthFrom, setLengthFrom] = useState("m");
  const [lengthTo, setLengthTo] = useState("m");
  const [measureInput, setMeasureInput] = useState(0);
  const [result, setResult] = useState(0);
  const convert = require("convert-units");

  const handleLengthFromChange = (e) => {
    setLengthFrom(e.target.value);
  };

  const handleLengthToChange = (e) => {
    setLengthTo(e.target.value);
  };

  const handleInputChange = (e) => {
    setMeasureInput(e.target.value);
  };

  useEffect(() => {
    setResult(convert(measureInput).from(lengthFrom).to(lengthTo));
  }, [lengthFrom, lengthTo, measureInput, convert]);

  return (
    <div className={classes.container}>
      <br />
      <LengthDropdown onChange={handleLengthFromChange} />
      <UserInput type="number" onChange={handleInputChange} />
      <LengthDropdown onChange={handleLengthToChange} />
      <br />
      <div>
        <Result result={result} />
      </div>
    </div>
  );
};

export default Length;
