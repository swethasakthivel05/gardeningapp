import { Link } from "react-router-dom";
import React from "react";
import { Typography, Paper, Button } from "@mui/material";
import TillandsiaimgDes from "./TillandsiaimgDes.jpg";

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

const PinkQuillCare = () => {
  return (
    <Paper elevation={7} style={containerStyle}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        Pink Quill Plant Care
      </Typography>
      <br></br>
      <img src={TillandsiaimgDes} style={imageStyle} alt="img" />
      <br></br>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Light☀️
      </Typography>
      <Typography style={sectionStyle}>
        Pink quill plants do best when positioned in a sunny spot. This will
        prolong the flowering period and keep the plant happy and healthy.
        However, too much direct and intense afternoon sunlight can burn the
        foliage, and too little will mean they won't bloom. Most enthusiasts
        recommend an east or west-facing window position.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Soil🌱
      </Typography>
      <Typography style={sectionStyle}>
        Although Tillandsia cyanea can be grown as air plants, what makes them
        unique is their ability also to be grown in containers. Their rooting
        system is small and fragile, so care should be taken when potting them,
        and the pots don't need to be large. Whatever potting medium you use, it
        should be particularly well-draining. Spongy and porous orchard bark, or
        peat moss and leaf mold mixes are popular choices. There are even
        mixtures available especially for Bromeliad species.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Water💧
      </Typography>
      <Typography style={sectionStyle}>
        Although pink quills don't need as much water as the average houseplant,
        they do tend to need more than most Tillandsia species. If they're
        potted up, depending on the time of year and how dry the conditions are,
        they could need watering anywhere from every two weeks to every couple
        of months. Although some enthusiasts recommend deep watering and then
        removing any excess water that has drained through, most agree that more
        regular misting is the best option. Soggy rots are one thing that will
        cause major problems for this plant, and this can be a problem when
        watering at the base. In the warmer seasons, gentle misting every week,
        allowing the runoff to wet the roots, may be needed. Always allow the
        potting medium to dry out before rewatering and, if in doubt,
        underwatering rather than overwatering is the more sensible option.
        During the colder months, watering should be infrequent. The Tillandsia
        cyanea is chlorine sensitive, so rainwater or filtered tap water is the
        preferred choice.
      </Typography>
      <Typography variant="h5" gutterBottom style={headingStyle}>
        Temperature and Humidity🌡️
      </Typography>
      <Typography style={sectionStyle}>
        It shouldn't come as a surprise that this tropical species appreciates
        warm conditions. Ideal minimum temperatures for encouraging blooms are
        around 75 degrees Fahrenheit. They aren't fans of dry conditions either.
        If there isn't enough humidity, the foliage can develop brown tips.
      </Typography>
      <br></br>
      <Link to="/pathap">
        <Button variant="contained" style={{ marginLeft: "auto" }}>
          Back
        </Button>
      </Link>
    </Paper>
  );
};

export default PinkQuillCare;
