import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import StringimgDes from "./StringimgDes.jpg";

const containerStyle = {
  width: "50%",
  height: "1300px",
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

const StringOfPearlsCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        String of Pearls Plant Care
      </Typography>
      <br></br>
      <img src={StringimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        String of pearls plants thrive on a combination of direct and indirect
        sunlight, totaling between six and eight hours a day. They're best when
        kept in direct sunlight during the softer morning hours, then moved to a
        spot that gets diffused, indirect light, or partial shade during the
        harsher afternoon hours.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Any regular succulent potting soil is acceptable for your string of
        pearls plants, but sandy soil is best. A good choice for this plant is a
        cactus potting mix. Alternatively, you can use a three-to-one mixture of
        potting soil to sharp sand. These plants are susceptible to root rot, so
        make sure their soil is well-draining.3 Plant them in a container that
        boasts ample drainage holes at its base. Terra cotta or clay pots can
        also help wick away excess moisture from the soil.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Keep the plant's soil lightly moist during the growing season in the
        spring and summer, then reduce water during the winter months. If you
        notice the succulent's spherical leaves flattening, it's a good
        indicator that the plant needs more water. You will likely need to water
        your plant once every seven to 14 days. Plants in hotter climates,
        outdoors during the summer, or in porous terra cotta pots might need
        water closer to every seven days, all depending on rain frequency and
        temperatures. If the soil is dry to the touch down to the first one-half
        inch of soil, that's a good sign your plant is thirsty. Water
        thoroughly; you're done watering once the water drains out of the bottom
        of the pot. Succulents need good drainage, and be careful not to
        overwater your string of pearls plants. Succulents are drought-resistant
        but cannot survive with wet, soggy roots.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        String of pearls plants thrive in warm temperatures above 70 degrees
        Fahrenheit from spring through fall, and it grows best with winter
        temperatures, ranging from 50 to 60 degrees Fahrenheit. This plant
        prefers low humidity, so avoid placing it in any already-humid areas of
        your home, like a kitchen or bathroom.
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

export default StringOfPearlsCare;
