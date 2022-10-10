import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RelatedSection from "../general/RelatedSection";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams
} from "react-router-dom";

import ImageCard from "../general/card/ImageCard";

export default function ModelPost() {
  const { id } = useParams();
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Container fixed sx={{ overflowY: "scroll", maxHeight: "85%" }}>
      <Stack spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" component="div">
              Model Detail {id}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              readOnly
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            Follower 1999
          </Grid>
          <Grid item xs={6}>
            Like
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ImageCard />
          </Grid>
        </Grid>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RelatedSection />
        </Grid>
      </Grid>
    </Container>
  );
}
