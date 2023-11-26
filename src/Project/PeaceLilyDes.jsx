import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import PeacelilyimgDes from "./PeacelilyimgDes.jpg";

const containerStyle = {
  width: "50%",
  height: "1200px",
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

const PeaceLilyCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Peace Lily Care
      </Typography>
      <br></br>
      <img src={PeacelilyimgDes} style={imageStyle} alt="img" />

      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        A peace lily needs sunlight, though not direct sun. They are
        shade-loving plants in their native habitats. But peace lilies indoors
        need a bit more filtered light. (Some varieties can withstand more light
        than others.) An east-facing window is a prime spot to place a peace
        lily in your house.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Peace lilies like a rich, loose potting mix that contains plenty of
        organic matter. These plants are native to tropical canopy conditions
        where the soil is packed with deteriorating plant material, so you'll
        find the best success with soil that mimics this composition.
        Additionally, the plant is also very sensitive to too-damp soil
        conditions, so be sure to choose a well-draining mixture.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Peace lilies prefer being under-watered rather than overwatered. How
        often you should water a peace lily depends on container size and how
        fast the soil drains, but, in general, water when the top inch of soil
        has dried out. In winter, reduce watering but never allow the soil to
        dry out completely. If your water at home is highly chlorinated, it's a
        good idea to use filtered or distilled water. Alternatively, you can
        allow tap water to sit for several days until the chlorine evaporates.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        These plants prefer moist warmth. Avoid cold drafts and temperatures
        that fall below 55 degrees Fahrenheit; the plant will die when exposed
        to prolonged cold temperatures. The ideal temperature range for your
        peace lily is 65 to 80 degrees Fahrenheit. Spritz the leaves every week
        with softened or distilled water throughout the summer growing season to
        raise humidity.
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

export default PeaceLilyCare;
