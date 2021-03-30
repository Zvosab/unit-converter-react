import classes from "./TempDropdown.module.css";

const TempDropdown = ({ onChange }) => {
  return (
    <div className={classes.container}>
      <select defaultValue="C" onChange={onChange}>
        <option value="C">C</option>
        <option value="F">F</option>
        <option value="K">K</option>
      </select>
    </div>
  );
};

export default TempDropdown;
