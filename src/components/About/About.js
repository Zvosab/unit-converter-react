import classes from "./About.module.css";

const About = () => {
  return (
    <h3 className={classes.text}>
      A simple converter app I made for React practice. I used
      https://www.npmjs.com/package/convert-units for converting. Got some
      knowledge about useEffect and Router
    </h3>
  );
};

export default About;
