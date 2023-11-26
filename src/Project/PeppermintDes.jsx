import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import PeppermintimgDes from "./PeppermintimgDes.jpeg";

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

const PeppermintPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Peppermint Plant Care
      </Typography>
      <br></br>
      <img src={PeppermintimgDes} style={imageStyle} alt="img" />

      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Peppermint can grow in full sun or partial shade. It can even tolerate
        some dappled shade, unlike most herbs.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        The adaptability of peppermint is one of its best features; it is also
        one of its worst features, allowing it to grow almost anywhere, making
        it a nuisance. Peppermint’s ideal soil is rich, loamy, and moist, though
        it's known to grow along trailside ditches and craggy outcrops—it can
        and will grow anywhere.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Consistently moist soil is the key to making sure your peppermint plant
        is happy and possesses tons of flavor. But be careful not to overdo it.
        Peppermint, like most mints, cannot tolerate standing water or soaking
        soil. Having soggy roots is a surefire way to kill or harm your plant.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Peppermint is unusually hardy and can survive light frosts but cannot
        endure extended cold snaps in cold climates, USDA Cold Hardiness Zones 5
        and below. Its ideal growing conditions fall between 55 to 70 degrees
        Fahrenheit, but it can survive nicely above and below that range with
        little negative effect. If you expect temperatures to be on the warmer
        side, keep the soil moist while also watching for excess growth from
        humid conditions.
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

export default PeppermintPlantCare;
