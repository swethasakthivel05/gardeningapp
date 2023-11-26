import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import BorageimgDes from "./BorageimgDes.jpeg";

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

const BoragePlantCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Borage Plant Care
      </Typography>
      <br></br>
      <img src={BorageimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Borage will grow in full sun to partial shade. However, growing borage
        plants in full sun will give you the best chance of lots of blooms and
        stocky stems.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Borage can thrive even in dry, nutrient-poor soils. However, it prefers
        a moderately moist, well-drained soil. It also can tolerate a fairly
        wide soil pH range (4.5–8.5), though it likes a slightly acidic soil.
        Amending your soil with organic matter, such as compost, will help to
        give your plants a nutritional boost.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        As your borage is growing from seed and getting established in your
        garden, water it at least every few days to keep the soil evenly moist
        but not soggy. Once the plant is mature, you can allow the soil to dry
        out between waterings.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        Borage is a particularly hardy herb able to withstand temperatures on
        both ends of the spectrum. However, while it is tolerant of both heat
        and cool weather, it won't be able to withstand a hard frost. It has no
        special humidity needs.
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

export default BoragePlantCare;
