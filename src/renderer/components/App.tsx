import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '../theme';
import Transformer from './Transformer';
import ListFiles from './Transformer/Action/ListFIles';

export default function App(): JSX.Element {
  return (
    // Setup theme and css baseline for the Material-UI app
    // https://mui.com/customization/theming/
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <main>
          {/* This is where your app content should go */}
          {/* <Greetings /> */}
          {/* <Transformer /> */}
          <ListFiles />
        </main>
      </Box>
    </ThemeProvider>
  );
}
