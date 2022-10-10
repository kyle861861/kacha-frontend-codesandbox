import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams
} from "react-router-dom";

export default function ImageCard() {
  const { id } = useParams();
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" component="div">
                Image Title / Gallery
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <img
                width="100%"
                src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                sx={{ width: "100%" }}
                defaultValue="Comment"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined">Submit</Button>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
