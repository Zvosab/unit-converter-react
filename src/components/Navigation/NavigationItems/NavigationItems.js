import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

const NavigationItems = () => {
  return (
    <nav className={classes.NavigationItems}>
      <ul>
        <li className={classes.active}>
          <NavLink activeClassName={classes.active} exact to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/length">
            Length
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/temperature">
            Temperature
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationItems;
