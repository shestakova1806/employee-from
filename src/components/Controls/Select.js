import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      height: "51px",
      fontFamily: "Lato",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EFEFEF",
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "Lato",
      fontSize: "12px",
      lineHeight: "1em",
      marginTop: "3px",
      marginLeft: "5px",
    },
    "& .MuiSelect-icon": {
      top: "calc(50% - 10px)",
    },
    "& .MuiSvgIcon-root": {
      width: "0.5em",
      height: "0.5em",
      color: "#C2C2C2",
    },
    "& .MuiMenuItem-root": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    "& .MuiFormLabel-root": {
      fontFamily: "Lato",
      fontSize: "14px",
      color: "#C2C2C2",
    },
    "& .MuiSelect-selectMenu": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    width: "184px",
    height: "47px",
    padding: "0",
  },
  label: {
    "& .MuiSelect-nativeInput": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
  },
  input: {
    fontFamily: "Lato",
    fontSize: "14px",
    "& .MuiMenuItem-root": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
  },
  menuItem: {
    fontFamily: "Lato",
    fontSize: "14px",
  },
});

export const Select = (props) => {
  const classes = useStyles();
  const { name, label, value, error = null, onChange, onBlur, options } = props;

  return (
    <FormControl
      variant="outlined"
      {...(error && { error: true })}
      className={classes.root}
      inputprops={{
        className: classes.input,
      }}
    >
      <InputLabel className={classes.label}>Amount to invest</InputLabel>
      <MuiSelect
        inputprops={{
          className: classes.input,
        }}
        label={label}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      >
        <MenuItem className={classes.menuItem} value="">
          None
        </MenuItem>
        {options.map((item) => (
          <MenuItem
            key={item.id}
            value={item.value}
            className={classes.menuItem}
            inputprops={{
              className: classes.input,
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
