import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D8BFD8', // Lavender pink
      light: '#E6E6FA', // Lavender
      dark: '#B19CD9', // Light pastel purple
    },
    secondary: {
      main: '#98FF98', // Mint green
      light: '#E6FFE6', // Very light mint
      dark: '#77DD77', // Pastel green
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;