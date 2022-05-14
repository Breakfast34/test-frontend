import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import Grid from "@mui/material/Grid/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack/Stack";
import { Button, Container } from "@mui/material";
import ImageUploading, { ImageListType } from "react-images-uploading";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function Home() {
  const [images, setImages] = React.useState([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const Input = styled("input")({
    display: "none",
  });

  const Images = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [widths, setWidths] = useState("350");
  const [heights, setHeights] = useState("350");
  const arrayImages = ["", "", ""];

  return (
    <>
      <Container></Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Stack>
          <ImageUploading multiple value={images} onChange={onChange}>
            {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
               
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ m: 1 }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                      <Input />
                      <Button
                        startIcon={<AddCircleIcon />}
                        variant="contained"
                        component="span"
                        onClick={onImageUpload}
                      >
                        เพื่มรูปภาพ
                      </Button>
                    </label>
                  </Stack>
                </Grid>
             
                {imageList.map((image, index) => (
                  <Grid key={index}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                      {arrayImages.map((Image, index) => (
                       
                        <Grid item xs={4} sm={4} md={4} key={index}>
                          <Images>
                            <canvas
                              id="images"
                              width={widths}
                              height={heights}
                              style={{
                                borderRadius: "15%",
                                boxShadow: "0px 0px 10px #000000",
                                border: "2px solid #2A1E95",
                                background: `url("${image.dataURL}")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                               backgroundRepeat: "no-repeat",
                                position: "relative",
                              }}
                            ></canvas>
                          </Images>
                        </Grid>
                      ))}
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="contained"
                        component="span"
                        color="primary"
                        startIcon={<FileUploadIcon />}
                        onClick={() => onImageUpdate(index)}
                      >
                        เปลี่ยนรูปภาพ
                      </Button>
                      &nbsp;
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<DeleteIcon />}
                        onClick={() => onImageRemove(index)}
                      >
                        ลบรูปภาพ
                      </Button>
                    </Grid>
                  </Grid>
                ))}
               
              </Grid>
            )}
          </ImageUploading>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                color="warning"
                sx={{ m: 1, pt: 2, width: "15ch" }}
                onClick={(e) => setWidths("")}
                type="text"
                onChange={(e) => setWidths(e.target.value)}
                value={widths}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">width </InputAdornment>
                  ),
                }}
              />
              <TextField
                color="warning"
                focused
                sx={{ m: 1, pt: 2, width: "15ch" }}
                onClick={(e) => setHeights("")}
                type="text"
                onChange={(e) => setHeights(e.target.value)}
                value={heights}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">height </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Container>
        </Stack>
      </Grid>
    </>
  );
}
