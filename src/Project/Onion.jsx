import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import OnionimgDes from "./OnionimgDes.jpg";

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

const RedOnionPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Red Onion Plant Care
      </Typography>
      <br></br>
      <img src={OnionimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Red onions need as much sunlight as possible. Your plants should receive
        a minimum of six to eight hours of full sun each day.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Onions grow best in loose soil with good drainage and lots of organic
        matter. The ideal soil pH for red onions is between 6.0 and 7.0.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Red onions require at least one inch of water each week. If it doesn't
        rain, give your plants a good soaking once per week, twice in very hot,
        dry conditions. An inch of rain should soak sandy, well-drained soil to
        a depth of ten inches and heavier clay soil six inches deep. Check the
        soil moisture with a trowel and add more water as needed. Sandy soil may
        need more frequent watering. Stop watering when the onion leaves start
        to fall over.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Onions are a cool-season crop that grows best in temperatures between 55
        and 75 degrees F., but they can withstand a light frost. Hard freezes
        below 20 degrees F. can damage plants. Watering well before a hard
        freeze and protecting plants with mulch can help insulate them from
        damage.
      </Typography>
      <br></br>
      <Link to="/pathv">
        <Button variant="contained" style={{ marginLeft: "auto" }}>
          Back
        </Button>
      </Link>
    </Paper>
  );
};

export default RedOnionPlantCare;
