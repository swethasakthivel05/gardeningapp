import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import BottleimgDes from "./BottleimgDes.jpeg";

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

const CucuzzaSquashCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Cucuzza Squash Plant Care
      </Typography>
      <br></br>
      <img src={BottleimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Cucuzza squash requires full sun of six to eight hours every day to
        produce a good harvest.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        The soil should be loamy, fertile, and have a neutral pH.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Because Cucuzza squash grows quickly and vigorously, it requires plenty
        of water for good production, especially as summer temperatures rise.
        The plants require over an inch of moisture per week during peak
        development.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Cucuzza squash is a tender annual and easily damaged by frost. Do not
        plant seed until the soil temperature reaches at least 70 degrees
        Fahrenheit. The vines are tolerant of high humidity but not arid
        conditions unless given sufficient water.
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

export default CucuzzaSquashCare;
