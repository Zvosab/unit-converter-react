import classes from "./LengthDropdown.module.css";

const LengthDropdown = ({ onChange }) => {
  return (
    <div className={classes.container}>
      <select defaultValue="m" onChange={onChange}>
        <option value="m">m</option>
        <option value="km">km</option>
        <option value="mm">mm</option>
        <option value="cm">cm</option>
      </select>
    </div>
  );
};

export default LengthDropdown;
