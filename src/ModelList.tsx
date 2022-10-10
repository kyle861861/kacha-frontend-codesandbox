import * as React from "react";
import * as ReactDOM from "react-dom";
import GalleryPost from "./component/model/ModelPost";
import Container from "@mui/material/Container";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgressiveImg from "./component/general/ProgressiveImg";

const titles = [
  { name: "James" },
  { name: "Paul" },
  { name: "John" },
  { name: "George" },
  { name: "Ringo" }
];

const ModelList = () => {
  return (
    <Container fixed>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {titles.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <item>
              <Card>
                <CardContent className="card-content">
                  <Stack spacing={1}>
                    <ProgressiveImg src={"/test.jpg"} height="250" />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      {item.name}
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </item>
          </Grid>
        ))}
      </Grid>
      {/* <Stack spacing={3}>
        {titles.map((title) => (
          <GalleryPost  />
        ))}
        </Stack> */}
    </Container>
  );
};
export default ModelList;
