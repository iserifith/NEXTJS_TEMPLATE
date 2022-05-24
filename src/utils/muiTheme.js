import { createTheme } from "@mui/material/styles";

const universal = createTheme({
  components: {},
});

const darkMui = createTheme({
  ...universal,
  palette: {
    type: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: "#121212",
    },
    text: {
      primary: "#fff",
    },
  },
});

const lightMui = createTheme({
  ...universal,
  palette: {
    type: "light",
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#ffffff",
    },
    text: {
      primary: "#121212",
    },
  },
});

export { darkMui, lightMui };
