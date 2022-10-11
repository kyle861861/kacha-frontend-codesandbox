import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button, Stack } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import ImageUploading, { ImageListType } from "react-images-uploading";

//https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js

const GalleryList = () => {
  const [file, setFile] = useState();
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  //   function handleChange() {
  //    console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));

  //   }
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
   // setImages(imageList as never[]);
  };

  return (
    <Container fixed>
      <FormControl>
        <Stack spacing={3}>
          <FormLabel id="radios" sx={{ color: "rgba(200, 132, 39, .8)" }}>
            Create Gallery
          </FormLabel>
          <TextField id="galleryName" label="Gallery Name" variant="outlined" />
          <TextField id="galleryTag" label="#Gallery Tag" variant="outlined" />
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Button
                  variant="outlined"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop Images
                </Button>

                <Button variant="outlined" onClick={onImageRemoveAll}>
                  Remove all images
                </Button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.dataURL} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
          <Button variant="contained" className="white-font-btn">
            Submit
          </Button>
        </Stack>
      </FormControl>
    </Container>
  );
};
export default GalleryList;
