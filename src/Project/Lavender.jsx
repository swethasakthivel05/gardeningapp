import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import LavenderimgDes from "./LavenderimgDes.jpeg";

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

const LavenderPlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Lavender Plant Care
      </Typography>
      <br></br>
      <img src={LavenderimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Lavender plants grown in full sunlight are the best way to guarantee a
        lot of buds and big, full bushes.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Lean soil (soil without a lot of organic matter mixed in) will encourage
        a higher concentration of oils (and good smells), so go easy on the
        organic matter and fertilizer. Lavender plants prefer well-drained soil
        that is on the drier side, so if you're using a traditional potting mix,
        be sure to add in some sand for drainage. An alkaline or especially
        chalky soil will enhance your lavender's fragrance, while any pH below
        about 6.5 will likely cause lavender plants to be very short-lived.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Lavender is a resilient plant that is extremely drought-tolerant once
        established. When first starting your lavender plants, keep them
        regularly watered during their first growing season. After that, they
        can handle extended periods of drought—in fact, too much water can lead
        to fungal disease and root rot.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Lavender can withstand a range of temperatures, and it's usually
        dampness more than the cold that's responsible for killing lavender
        plants. Dampness can come in the form of wet roots during the winter
        months or high humidity in the summer. If humidity is a problem, make
        sure you have plenty of space between your plants for airflow, and
        always plant your bushes in a sunny location. Protect lavender plants
        from harsh winter winds by planting them next to a stone or brick wall
        to provide additional heat and protection. If you live in an area where
        the ground routinely freezes and thaws throughout the winter, your
        lavender plants will benefit from a layer of mulch applied after the
        ground initially freezes to protect the roots.
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

export default LavenderPlantCare;
