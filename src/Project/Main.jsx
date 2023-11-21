import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCw7u_je9-4tjHMFCjEi8ouoqwxOFbYJtdPLwjs2A8d-z5nbGCwwJ-tPp5YZKLbRN4_U&usqp=CAU",
    title: "Flowers..",
    width: "40%",
  },
  {
    url: "data:image/jpeg;base64,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",
    title: "Burgers",
    width: "30%",
  },
  {
    //  url: '/static/images/buttons/camera.jpg',
    title: "Camera",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Main() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
