import classes from "./Input.module.css";

const UserInput = ({ type, onChange }) => {
  return (
    <input
      className={classes.Input}
      placeholder="Enter a number..."
      type={type}
      onChange={onChange}
    />
  );
};

export default UserInput;
