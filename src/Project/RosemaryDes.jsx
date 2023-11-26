import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import RosemaryimgDes from "./RosemaryimgDes.jpeg";

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

const RosemaryPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Rosemary Plant Care
      </Typography>
      <br></br>
      <img src={RosemaryimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Rosemary likes full sun and does not tolerate shade. This means it
        requires at least six hours of direct sunlight on most days. A
        south-facing window is ideal for indoor growth, and grow lights are
        often necessary to provide supplemental light. Bring indoor plants
        outside in warm weather to allow them access to natural sunlight.
        Inadequate light can cause leggy and weak growth.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        A well-draining sandy or loamy soil is best for rosemary. It doesn’t
        grow well in heavy clay and wet soils. A slightly acidic to neutral soil
        pH is ideal (6.0 to 7.0).
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Rosemary is quite drought-tolerant once the plant is established, and
        it’s better to water sparingly rather than overwater them. Allow the top
        few inches of soil to dry out between waterings, and then water so that
        the soil is evenly moist but not soggy.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        This shrub likes warm weather and moderate humidity levels. Most
        rosemary varieties can’t survive temperatures below 30 degrees, but they
        have good heat tolerance. They prefer temperatures between 55 degrees
        and 80 degrees. Moreover, high humidity can lead to rot and fungal
        issues, especially if there isn’t enough air circulation around the
        plant.
      </Typography>
      <br></br>
      <br></br>
      <Link to="/pathh">
        <Button variant="contained" style={{ marginLeft: "auto" }}>
          Back
        </Button>
      </Link>
    </Paper>
  );
};

export default RosemaryPlantCare;
