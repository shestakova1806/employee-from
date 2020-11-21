import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-body1": {
      fontSize: "14px",
    },
    "& .MuiSvgIcon-root": {
      width: "25px",
      height: "25px",
    },
    "& .MuiIconButton-root": {
      padding: "0 9px 20px 4px",
    },
    "& .MuiCheckbox-colorPrimary.Mui-checked ": {
      color: "#1EAAFC",
    },
    "& .MuiCheckbox-root": {
      color: "#EFEFEF",
    },
  },
});

export const Checkbox = (props) => {
  const classes = useStyles();

  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl className={classes.root}>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};
