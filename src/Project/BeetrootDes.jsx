import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import BeetrootimgDes from "./BeetrootimgDes.jpg";

const containerStyle = {
  width: "50%",
  height: "1000px",
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

const BeetPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Beetroot Plant Care
      </Typography>
      <br></br>
      <img src={BeetrootimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Beets prefer to grow in full sun, meaning at least six hours of direct
        sunlight on most days. However, they can tolerate some light shade.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        A light, rich, well-draining soil with a slightly acidic to neutral pH
        is best. Rocks, clay, weeds, and anything else that can interfere with
        root development should be removed. Moreover, beets need boron in the
        soil to prevent black heart, a condition that causes deformed leaves and
        corky black spots on the roots. You can provide boron by using compost
        or seaweed extract as a soil amendment.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Provide at least 1 inch of water every week. Mulching will help to keep
        the soil from drying out and getting too warm.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Beets are not quite as cold-tolerant as some cool-season vegetables,
        such as broccoli, but they can tolerate a light frost. Temperatures
        between 50 and 85 degrees Fahrenheit are ideal. Humidity also typically
        isn't an issue as long as proper soil moisture is maintained and there's
        air flow around the plants to help inhibit fungal growth.
      </Typography>
      <br></br>
      <br></br>
      <Link to="/pathv">
        <Button variant="contained" style={{ marginLeft: "auto" }}>
          Back
        </Button>
      </Link>
    </Paper>
  );
};

export default BeetPlantCare;
