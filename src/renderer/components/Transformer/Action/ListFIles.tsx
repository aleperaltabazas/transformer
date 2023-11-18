import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
const remote = window.require('@electron/remote');
import { dialog as electronDialog } from 'electron';

// const fs = window.electron.fs;
const dialog = remote.dialog as typeof electronDialog;

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

  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Button
            onClick={async () => {
              dialog
                .showOpenDialog({
                  properties: ['openDirectory'],
                })
                .then((res) => {
                  if (res.filePaths.length > 0) {
                    setDirectory(res.filePaths[0]);
                  }
                });
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
