import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';
import Transformer from './Transformer';

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
          <Transformer />
        </main>
      </Box>
    </ThemeProvider>
  );
}
