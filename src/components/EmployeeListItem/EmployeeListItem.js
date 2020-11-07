import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import "./EmployeeListItem.css";

const useStyles = makeStyles({
  root: {
    width: "920px",
    height: "300px",
    radius: "5px",
  },
  text: {
    fontSize: "30px",
  },
});

export const EmployeeListItem = ({ employee }) => {
  const classes = useStyles();

  const { name, position, onVacation } = employee;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.text}>{name}</Typography>
        <Typography className={classes.text}>{position}</Typography>
        <Switch />
      </CardContent>
    </Card>
  );
};
