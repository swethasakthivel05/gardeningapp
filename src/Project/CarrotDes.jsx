import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import CarrotimgDes from "./CarrotimgDes.jpeg";
import { Link } from "react-router-dom";

const containerStyle = {
  backgroundImage: 'url("https://wallpaperaccess.com/full/754056.jpg")',
  backgroundSize: "cover",
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

const divStyle = {
  zIndex: 1,
  backgroundcolor: "blue",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
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
    <div
      style={{
        padding: 80,
        backgroundImage:
          'url("data:image/jpeg;base64,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")',
      }}
    >
      <div style={divStyle}>
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
            Even though the roots are growing underground, the foliage needs
            full sun to partial shade for the carrot roots to grow quickly and
            develop their sugars.
          </Typography>
          <Typography variant="h5" gutterBottom style={headingStyle}>
            Soil🌱
          </Typography>
          <Typography style={sectionStyle}>
            Carrots need loose, well-draining soil. Rocks and clumps will cause
            the carrot roots to split and become deformed. Carrots prefer a
            slightly acidic soil—in the range of 6.0 to 6.8.
          </Typography>
          <Typography variant="h5" gutterBottom style={headingStyle}>
            Water💧
          </Typography>
          <Typography style={sectionStyle}>
            Water your carrots with at least one inch of water every week.
            Mulching will help conserve water and keep the soil cool.
          </Typography>
          <Typography variant="h5" gutterBottom style={headingStyle}>
            Temperature and Humidity🌡️
          </Typography>
          <Typography style={sectionStyle}>
            These biennials are typically grown as annuals in all zones and in
            all climates. However, they grow best and are tastiest when
            nighttime temperatures average about 55 degrees Fahrenheit and
            daytime temperatures average 75 degrees Fahrenheit. In warmer
            climates, carrots are sometimes planted as a late fall and winter
            crop.
          </Typography>
          <br></br>
          <br></br>
          <Link to="/pathv">
            <Button variant="contained" style={{ marginLeft: "auto" }}>
              Back
            </Button>
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default CarrotCare;
