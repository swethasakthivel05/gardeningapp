import * as React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material"; // Import Grid component from Material-UI
import CardActionArea from "@mui/material/CardActionArea";
import image1 from "./tomato.avif";
import image2 from "./onion.jpg";
import image6 from "./Bottlegourd.jpg";
import image5 from "./carrot.png";
import image3 from "./beetroot.avif";
import image4 from "./chilli.jpg";
import { Link } from "react-router-dom";
export default function Varietiesofvege() {
  return (
    <Grid container spacing={2} padding={7}>
      {" "}
      {/* Create a grid container with spacing */}
      {/* First Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image1}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Tomato Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  ></div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/tomato">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Second Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image2}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Onion Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  ></div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/onion">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Third Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image3}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Beetroot Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  ></div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/beetroot">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image4}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Chilli Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  ></div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/chilli">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Second Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image5}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Carrot Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  ></div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/carrot">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Third Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image6}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Cucuzza Squash Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  ></div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/bottle">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
