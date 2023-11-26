import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import TulsiimgDes from "./TulsiimgDes.jpeg";

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

const HolyBasilPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Holy Basil Plant Care
      </Typography>
      <br></br>
      <img src={TulsiimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Giving holy basil plenty of sunlight will ensure large healthy leaves.
        This plant will tolerate some shade, but anything more than dappled
        shade and you will notice a decline.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Though holy basil does grow quite well in most soils, it takes minimal
        effort to thrive. The ideal soil type is light and airy but rich at the
        same time. A silty loam is a good choice because it retains some
        moisture but drains well. Soaking wet soil is problematic, so if soil
        drainage is an issue, you can amend the soil with perlite to promote
        drainage. If you plant holy basil in a container or raised bed, the best
        soil mix to use would be three parts peat moss, one part compost, and
        one part perlite.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Keeping the soil moist but not drenched and soggy is the key to growing
        healthy and abundant holy basil. This rule applies to growing the plant
        indoors or outdoors. Another consideration when watering basil is a
        disease; basil downy mildew is often spread by infected soil being
        splashed up on the leaves. Soaker hoses or drip irrigation systems can
        prevent fungal spores from splashing up from the soil.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Holy basil’s native range is located in a tropical region, so
        maintaining an average temperature of 70 degrees Fahrenheit is necessary
        if you want the plant to survive outdoors. If your local temperature is
        above this year-round, holy basil will act as a perennial. In cooler
        hardiness zones, this plant will be annual unless you plant it in a
        container and move it indoors in the colder months. The USDA recommends
        holy basil will do well in USDA zones 10b to 11, but you can grow it
        indoors in any zone.
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

export default HolyBasilPlantCare;
