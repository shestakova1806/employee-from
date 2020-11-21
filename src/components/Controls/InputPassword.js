import React from "react";
import { makeStyles } from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0",
      height: "53px",
    },
    "& .Mui-error": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "Lato",
      fontSize: "12px",
      lineHeight: "1em",
      marginTop: "3px",
      marginLeft: "5px",
    },
    "& .MuiFormLabel-root": {
      fontFamily: "Lato",
      fontSize: "14px",
      color: "#C2C2C2",
    },
    "& .MuiFormLabel-root": {
      fontFamily: "Lato",
      fontSize: "14px",
      color: "#C2C2C2",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EFEFEF",
    },
    width: "378px",
    height: "47px",
    padding: "0",
  },
  input: {
    fontFamily: "Lato",
    fontSize: "14px",
  },
});

export const InputPassword = (props) => {
  const classes = useStyles();
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    onBlur,
    endAdornment,
    type,
  } = props;
  console.log("Input -> error", error);

  return (
    <FormControl
      className={classes.root}
      variant="outlined"
      {...(error && { error: true })}
      InputProps={{
        className: classes.input,
      }}
    >
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        name={name}
        label={label}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        endAdornment={endAdornment}
        InputProps={{
          className: classes.input,
        }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
