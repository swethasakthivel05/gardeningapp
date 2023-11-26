import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import DillimgDes from "./DillimgDes.jpeg";

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

const DillPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Dill Plant Care
      </Typography>
      <br></br>
      <img src={DillimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Plant your dill in a garden location that gets full sunlight for at
        least six to eight hours each day. If you live in an especially hot
        climate, during the summer, a bit of afternoon shade is fine and
        appreciated.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Dill plants prefer soil that is rich, loose, and well-draining. Dill is
        not particular about its soil pH but thrives best in slightly acidic
        soil. Keep in mind, dill plants have a taproot (a central dominant root
        from which smaller roots grow), so compacted soil could be a problem.
        Because dill can self-sow, it's important that you either plant it in a
        spot where it’s allowed to roam or where you can harvest it before it
        goes to seed.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Keep your dill plant consistently moist without allowing the soil to
        become soggy or soaked. The soil should never be allowed to dry out
        completely between waterings because that can cause the plant to
        prematurely bolt to seed.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Dill plants are very cold-hardy and can tolerate temperatures that dip
        as low as 25 degrees Fahrenheit. That being said, the optimal
        temperature for your dill plant is when the soil is about 70 degrees
        Fahrenheit, which will happen during the late spring and summer in most
        USDA hardiness zones. Dill has no special humidity requirements.
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

export default DillPlantCare;
