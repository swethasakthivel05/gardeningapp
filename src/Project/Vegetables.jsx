import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import image from "./vege.jpg";
export default function Vegetables() {
  return (
    <Card sx={{ maxWidth: 345, zIndex: 1 }}>
      <Link to="/pathv" style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" src={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vegetables
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vegetable plants encompass a diverse range of edible plants
              cultivated for their fruits, roots, leaves, or stems, providing
              essential nutrients and dietary variety.These plants are crucial
              in gardening and agriculture, offering an array of varieties like
              tomatoes, cucumbers, carrots, spinach, and more, contributing to
              healthy diets and culinary practices.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
