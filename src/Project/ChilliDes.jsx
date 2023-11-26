import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import ChilliimgDes from "./ChilliimgDes.jpeg";

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
  maxHeight: 400,
  objectFit: "cover",
  marginBottom: 16,
};

const OrnamentalPepperCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Ornamental Pepper Plant Care
      </Typography>
      <br></br>
      <img src={ChilliimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Ornamental peppers need full sun to provide the energy for producing
        flowers and colorful fruit. If you grow these plants indoors, you should
        use supplemental artificial lighting for healthy plants and good
        fruiting.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Plant your ornamental peppers in rich, loamy soil that is slightly
        acidic (pH 6.0 to 6.8). Generous soil amendments of compost and
        well-rotted manure will both improve tilth and add trace nutrients for
        healthier plants. If your soil is heavy clay, plant your peppers in
        raised beds or use containers for good drainage. If growing ornamental
        peppers in pots, any all-purpose potting mix will be sufficient.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        While ornamental peppers react badly to dry conditions, they do not like
        to be waterlogged, either. Water deeply whenever the soil's surface
        feels dry, and aim for a moisture level like that of a wrung-out sponge.
        About 1 inch of water per week is recommended. Check container-grown
        plants often for water, as they dry out more quickly than in-ground
        plants.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Like tomatoes, ornamental peppers are members of the Solanaceae family
        and both enjoy full sun and hot weather. Temperatures of 75 degrees F
        and up stimulate rapid growth. Planting peppers in cold soil may cause
        them to remain stunted for the entire growing season. Humidity is a less
        important growth factor, as long as roots stay moist. However,
        temperatures above 90 degrees may cause blossom drop, but the plants
        will rebound once the temperatures cool.
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

export default OrnamentalPepperCare;
