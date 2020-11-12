import React from "react";
import { Button as SubmitButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

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
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </SubmitButton>
  );
};
