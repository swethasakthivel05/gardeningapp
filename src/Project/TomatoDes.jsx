import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import TomatoimgDes from "./TomatoimgDes.jpg";

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
  maxHeight: 300,
  objectFit: "cover",
  marginBottom: 16,
};

const TomatoPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Tomato Plant Care
      </Typography>
      <br></br>
      <img src={TomatoimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Tomatoes require eight hours or more of direct sunlight daily to grow,
        flower, and fruit. In warmer regions like the southern United States,
        tomatoes might benefit from some afternoon shade during the hottest
        times of the year.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Plant tomatoes in a site with rich, well-drained soil. Choose a spot
        with soil that is slightly acidic loam or sandy loam. Work organic
        matter into the soil in the autumn or a few weeks before you plan to
        plant.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Water tomato plants regularly to ensure they're receiving at least one
        inch of water per week. Consistent watering will help produce the
        best-quality fruit.
        <br />
        Apply water directly to the soil at the plant's root zone rather than
        sprinkling water overhead and wetting the foliage. Keeping the foliage
        dry will reduce the chance of fungal diseases.
        <br />
        Mulching with organic material like hay, straw, or grass clippings that
        have not been treated with pesticides can help retain soil moisture.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Tomatoes can grow well at a variety of humidity levels, but they need
        warm temperatures to survive and thrive. Temperatures below 50 degrees
        Fahrenheit can stunt growth and damage the plant's ability to produce
        flowers and fruit. Daytime temperatures above 85 degrees can cause
        blossom drop, but you can help keep plants withstand the heat by
        mulching the soil around plants and keeping them well watered.
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

export default TomatoPlantCare;
