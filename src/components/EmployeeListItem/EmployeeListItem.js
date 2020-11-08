import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import "./EmployeeListItem.css";

const useStyles = makeStyles({
  root: {
    width: "920px",
    height: "300px",
    radius: "5px",
  },
  avatar: {
    width: "162px",
    height: "162px",
  },
});

export const EmployeeListItem = ({ employee }) => {
  const classes = useStyles();

  const { avatar, name, position, onVacation } = employee;
  return (
    <Card className={classes.root} variant="outlined">
      <Avatar src={avatar} className={classes.avatar} />
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{position}</Typography>
        <Switch />
      </CardContent>
    </Card>
  );
};
