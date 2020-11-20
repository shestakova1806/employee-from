import React from "react";
import { Button as SubmitButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    width: "201px",
    height: "47px",
  },
});

export const Button = (props) => {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <SubmitButton
      variant="contained"
      size="large"
      color="primary"
      onClick={onClick}
      {...other}
      classes={classes.root}
    >
      {text}
    </SubmitButton>
  );
};
