import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import AnthuriumimgDes from "./AnthuriumimgDes.jpg";
import { Link } from "react-router-dom";
const containerStyle = {
  width: "50%",
  height: "700px",
  maxWidth: 800,
  margin: "auto",
  padding: 16,
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  marginTop: "25px",
  marginBottom: "25px",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "25px",
  marginLeft: "auto",
};

const sectionStyle = {
  marginBottom: 24,
  marginRight: "auto",
  fontFamily: "Times New Roman",
  textIndent: "5em",
};

const headingStyle = {
  fontFamily: "Comic Sans MS, cursive",
  marginRight: "auto",
};

const imageStyle = {
  width: "50%",
  maxHeight: 400,
  objectFit: "cover",
  marginBottom: 16,
};

const AnthuriumCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Anthurium Plant Care
      </Typography>
      <br></br>
      <img src={AnthuriumimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Indoors or out, anthuriums like sun more than shade. They grow best in
        bright, indirect light. Avoid direct sun.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Anthuriums prefer a coarse, well-draining potting mix. An orchid mix
        with additional sand and peat moss mixed in makes perfect soil for
        anthuriums.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        The soil should be kept slightly moist and never allowed to dry out
        completely. Set the pot in a tray with rocks or gravel that has water.
        The plant's water can drain there and help keep humidity levels higher
        around the plant. Allow the top of the soil to dry out to the touch
        before watering again. Indoors, this is about once a week. If outside,
        during hot days, it can be every two or three days between waterings.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        All species of anthurium are native tropical plants, and mimicking those
        conditions will give you the best chances for success. This plant
        prefers high humidity and temperatures between 65 and 85 degrees
        Fahrenheit. These plants can be grown outside in zones 11 to 12 and will
        likely perish at temperatures of 40 degrees Fahrenheit or less. In dry
        climates—or during dry winter months—mist the plant daily to keep
        humidity levels high. You may find it necessary to run a humidifier
        constantly during dry months.
      </Typography>
      <br></br>
      <br></br>
      <Link to="/pathap">
        <Button variant="contained" style={{ marginLeft: "auto" }}>
          Back
        </Button>
      </Link>
    </Paper>
  );
};

export default AnthuriumCare;
