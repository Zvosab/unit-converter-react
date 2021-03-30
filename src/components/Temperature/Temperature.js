import React, { useEffect, useState } from "react";
import UserInput from "../Input/Input";
import TempDropdown from "../Dropdowns/TempDropdown";
import Result from "../Result/Result";
import classes from "./Temperature.module.css";

const Temperature = () => {
  const [tempFrom, setTempFrom] = useState("C");
  const [tempTo, setTempTo] = useState("C");
  const [measureInput, setMeasureInput] = useState(0);
  const [result, setResult] = useState(0);
  const convert = require("convert-units");

  const handleTempFromChange = (e) => {
    setTempFrom(e.target.value);
  };

  const handleTempToChange = (e) => {
    setTempTo(e.target.value);
  };

  const handleInputChange = (e) => {
    setMeasureInput(e.target.value);
  };

  useEffect(() => {
    setResult(convert(measureInput).from(tempFrom).to(tempTo));
  }, [tempFrom, tempTo, measureInput, convert]);

  return (
    <div className={classes.container}>
      <br />
      <TempDropdown onChange={handleTempFromChange} />
      <UserInput type="number" onChange={handleInputChange} />
      <TempDropdown onChange={handleTempToChange} />
      <br />
      <hr />
      <Result result={result} />
    </div>
  );
};

export default Temperature;
