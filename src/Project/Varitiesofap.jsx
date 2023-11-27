import * as React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material"; // Import Grid component from Material-UI
import CardActionArea from "@mui/material/CardActionArea";
import image1 from "./swizz.jpeg";
import image2 from "./anthurium.webp";
import image6 from "./peacelily.jpeg";
import image5 from "./prayerplant.jpeg";
import image3 from "./springofperls.jpeg";
import image4 from "./tillandsia.jpeg";
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
                  Swiss cheese plant
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
            <Link to="/swiss">
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
                  Anthurium Plant
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
            <Link to="/anthurium">
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
                  String of Perls Plant
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
            <Link to="/string">
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
                  Pink Quill Plant
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
            <Link to="/tillandsia">
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
                  Prayer Plant
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
            <Link to="/prayer">
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
                  Peace Lily
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
            <Link to="/peace">
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
