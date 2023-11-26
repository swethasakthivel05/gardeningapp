import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import SwissimgDes from "./SwissimgDes.jpg";

const containerStyle = {
  width: "50%",
  height: "1100px",
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
  maxHeight: 300,
  objectFit: "cover",
  marginBottom: 16,
};

const SwissDes = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Swiss Cheese Plant Care
      </Typography>
      <br></br>
      <img src={SwissimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Because of the Swiss cheese plant's tropical origin, Monstera adansonii
        needs sunlight, but it's best if the light is bright and indirect. It's
        used to thriving under the cover of large trees in the jungle, and the
        foliage can easily burn if it's exposed to too much direct sun. If
        direct sunlight is unavoidable, limit exposure to just two or three
        hours of morning sun.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Swiss cheese plants grow best in peat-based potting mix, which will help
        to trap moisture in the soil without causing it to become waterlogged.
        For strong growth, aim for a soil pH between 5.5 and 7.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Swiss cheese plants like to be consistently moist but not soaked. Before
        watering your Swiss cheese plant, stick your finger into the soil about
        an inch deep. If the soil feels nearly dry to the touch, it's time to
        water the plant. Irrigate until a little water runs out of the
        container's drainage holes.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        The Swiss cheese plant is a jungle plant, so it thrives in very high
        humidity and warm temperatures. The closer you can mimic the plant's
        natural conditions, the better. Make sure your plant always remains in a
        spot that's above 40 degrees Fahrenheit, and protect it from drafts. A
        humidity level above 50 percent is ideal. A warm, well-lit bathroom is a
        good spot for this plant. If you need to increase humidity, mist the
        plant or use a humidifier in its space.
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

export default SwissDes;
