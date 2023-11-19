import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

// const fs = window.electron.fs;

interface Props {}

const ListFiles = (props: Props) => {
  const [directory, setDirectory] = useState<string>();
  const [files, setFiles] = useState<string[]>();

  // if (directory) {
  //   fs.readdir(directory, (err, files) => {
  //     if (err != null) {
  //       console.log(files);
  //       setFiles(files);
  //     }
  //   });
  // }
  console.log(window.electron);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              window.electron.selectFolder().then(console.log);
              // dialog
              //   .showOpenDialog({
              //     properties: ['openDirectory'],
              //   })
              //   .then((res) => {
              //     if (res.filePaths.length > 0) {
              //       setDirectory(res.filePaths[0]);
              //     }
              //   });
            }}
          >
            Select directory
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListFiles;
