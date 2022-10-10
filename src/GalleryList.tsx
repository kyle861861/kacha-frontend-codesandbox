import * as React from "react";
import * as ReactDOM from "react-dom";
import GalleryPost from "./component/gallery/GalleryPost";
import Container from "@mui/material/Container";
import { Button, Stack } from "@mui/material";

const titles = ["James", "Paul", "John", "George", "Ringo"];

const GalleryList = () => {
  return (
    <>
      <Container fixed>
        <Stack spacing={3}>
          {titles.map((title) => (
            <GalleryPost />
          ))}
        </Stack>
      </Container>
    </>
  );
};
export default GalleryList;
