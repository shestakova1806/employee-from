import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import "./EmployeeListItem.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(30, 170, 252, 0.3)",
      main: "#1EAAFC",
    },
    secondary: {
      light: "#909090",
      main: "#747474",
      lightdark: "rgba(151, 151, 151, 0.3)",
      dark: "#979797",
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: "920px",
    height: "300px",
    radius: "5px",
  },
  avatar: {
    width: "162px",
    height: "162px",
    display: "flex",
  },
  name: {
    color: theme.palette.secondary.light,
  },
});

export const EmployeeListItem = ({ employee }) => {
  const classes = useStyles();

  const { avatar, name, position, onVacation } = employee;
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} variant="outlined">
        <Avatar src={avatar} className={classes.avatar} />
        <CardContent>
          <Typography className={classes.name}>{name}</Typography>
          <Typography color="secondary">{position}</Typography>
          <Switch />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
