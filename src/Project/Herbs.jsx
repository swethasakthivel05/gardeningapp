import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import image from "./herbs.jpg";
export default function Herbs() {
  return (
    <Card sx={{ maxWidth: 345, zIndex: 1 }}>
      <Link to="/pathh" style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" src={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Herbs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Herbs are non-woody plants with green, delicate stems, often used
              for culinary, medicinal, or aromatic purposes, examples include
              basil, thyme, and mint.These plants are characterized by their
              minimal branching, short height, and soft stems, providing a
              variety of flavors and scents, serving as essential ingredients in
              cooking and traditional medicine.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
