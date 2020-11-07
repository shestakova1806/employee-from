import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { HomePage, LoginPage } from "../pages";

import "./App.css";

const useStyles = makeStyles({
  root: {
    background: "#ECF6FE",
  },
});

export const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/employees" component={HomePage} />
        </Switch>
      </Container>
    </Box>
  );
};
