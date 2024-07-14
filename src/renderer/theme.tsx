import { createTheme } from '@mui/material/styles';

// Create a Material-UI theme instance
// https://mui.com/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: '#191919',
    },
    secondary: {
      main: '#750E21',
    },
    background: {
      default: '#E3651D',
    },
    error: {
      main: '#BED754',
    },
  },
  // typography: {
  //   fontWeightMedium: 600,
  //   fontSize: 17,
  //   h1: {
  //     fontSize: "2.2rem",
  //     fontWeight: 400,
  //     color: "#9EEAF9",
  //   },
  //   body1: {
  //     color: "#9EEAF9",
  //   },
  // },
});

export default theme;
