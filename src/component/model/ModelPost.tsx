import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import {Stack } from '@mui/material';

import {Routes, Route, useNavigate} from 'react-router-dom';




const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ModelPost() {
  const [value, setValue] = React.useState<number | null>(2);

  const navigate = useNavigate();

  const navigateToDetail = () => {
    // 👇️ navigate to /contacts
    navigate('/ModelDetail/999');
  };


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Stack spacing={2}>
      
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          readOnly
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Model (Follower 1999)
        </Typography>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/test.jpg"
        />
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Latest Event
        </Typography>
         <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Latest Gallery
        </Typography>
        
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tag:#Sport / #Nice #Uniform
        </Typography>
        
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={navigateToDetail}>More</Button>
        <Button size="small">Share</Button>
        <Button size="small">Like</Button>
      </CardActions>

    </Card>
  );
}
