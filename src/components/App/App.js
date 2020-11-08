import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { HomePage, LoginPage } from "../pages";

import "./App.css";

import LatoRegular from "../../fonts/Lato-Regular.ttf";

const lato = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Lato'),
    local('Lato-Regular'),
    url(${LatoRegular}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
    fontSize: 26,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [lato],
      },
    },
  },
  palette: {
    primary: {
      light: "rgba(30, 170, 252, 0.3)",
      main: "#1EAAFC",
    },
    secondary: {
      light: "#909090",
      main: "#747474",
      lightdark: "rgba(151, 151, 151, 0.3)",
      darl: "#979797",
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: "#ECF6FE",
    height: "100%",
    width: "100%",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/employees" component={HomePage} />
          </Switch>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
