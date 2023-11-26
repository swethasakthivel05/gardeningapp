import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import PrayerimgDes from "./PrayerimgDes.jpg";

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

const PrayerPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Prayer Plant Care
      </Typography>
      <br></br>
      <img src={PrayerimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Hang or set your prayer plant near a window where it will receive
        indirect sunlight. Never set your plant in direct sunlight because the
        sun will scorch the plant’s leaves or the leaves will develop blotches
        or patches and fade in color intensity. Prayer plants are generally
        tolerant of lower light areas. In the winter, when the plants go into
        dormancy (and sometimes die back completely), provide them with bright
        light to maintain growth.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Prayer plants can prosper in a variety of soils, as long as they're
        well-draining. Typically, a traditional potting mix works fine, but you
        can make your own by combining two parts sphagnum peat moss, one part
        loamy soil, and one part perlite or coarse sand together. In addition,
        the soil should be acidic, with a pH of 6.0. To improve drainage, add
        rocks or gravel to the bottom of your pot and be sure that the pot has
        ample drainage holes.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        During their growing season, water your prayer plant frequently
        (whenever the top layer becomes dry) and never allow the potting soil to
        dry out completely. These plants are very susceptible to drought and
        will not survive long if left unwatered. However, to avoid fungal
        problems, do not let water sit directly on the leaves or let the plant
        get soggy. Both insufficient water and overwatering your plant can cause
        the leaves to turn yellow and drop. When watering your prayer plant, use
        water that is at least at room temperature, if not slightly warm.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Prayer plants prefer normal household temperatures between 60 and 80
        degrees Fahrenheit. Prolonged lower temperatures can damage the leaves
        and cause them to drop from the plant. Additionally, prayer plants
        thrive best in a very humid environment. To increase the humidity
        available to your plant, you can place a small humidifier nearby, or
        place the plant atop a tray that has been filled with small stones and
        water. You can also mist the leaves frequently with room temperature or
        slightly warm water.
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

export default PrayerPlantCare;
