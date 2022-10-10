import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import { useState, useEffect } from "react";
import ProgressiveImg from "../general/ProgressiveImg";
//import placeholderSrc from "../../../public/loading/image_processing.gif";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function GalleryPost() {
  const [value, setValue] = React.useState<number | null>(2);
  //const [imgSrc, setImgSrc] = useState(placeholderSrc);

  useEffect(() => {
    // update the image
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="card-content">
        <Stack spacing={1}>
          <ProgressiveImg src={"/test.jpg"} height="250" />
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions className="card-action">
        <IconButton className="card-action-item">
          <FavoriteIcon color="error" />
        </IconButton>
        <IconButton className="card-action-item">
          <ModeCommentIcon color="warning" />
        </IconButton>
        <IconButton className="card-action-item">
          <SwapHorizIcon color="success" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
