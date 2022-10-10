import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function RelatedSection() {
  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5" component="div">
            test
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h5" component="div">
            test2
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
