import { createTheme } from "@mui/material/styles";
import themeOptions from "./themeBase";

const theme = createTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette
  },
  breakpoints: {
    ...themeOptions.breakpoints
  },
  typography: {
    ...themeOptions.typography
  },
  components: {
    ...themeOptions.components
  }
});

export default theme;