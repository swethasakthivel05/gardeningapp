import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import CarrotimgDes from "./CarrotimgDes.jpeg";
import { Link } from "react-router-dom";

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

const CarrotCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Carrot Plant Care
      </Typography>
      <br></br>
      <img src={CarrotimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Even though the roots are growing underground, the foliage needs full
        sun to partial shade for the carrot roots to grow quickly and develop
        their sugars.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Carrots need loose, well-draining soil. Rocks and clumps will cause the
        carrot roots to split and become deformed. Carrots prefer a slightly
        acidic soil—in the range of 6.0 to 6.8.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Water your carrots with at least one inch of water every week. Mulching
        will help conserve water and keep the soil cool.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        These biennials are typically grown as annuals in all zones and in all
        climates. However, they grow best and are tastiest when nighttime
        temperatures average about 55 degrees Fahrenheit and daytime
        temperatures average 75 degrees Fahrenheit. In warmer climates, carrots
        are sometimes planted as a late fall and winter crop.
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

export default CarrotCare;
