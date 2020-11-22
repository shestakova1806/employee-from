import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
  eye: {
    "& .MuiSvgIcon-root": {
      width: "21px",
      height: "21px",
    },
    "& .MuiIconButton-root": {
      color: "#EFEFEF",
    },
  },
});

export const InputPassword = (props) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleToggleVisibility = useCallback(
    () => setIsPasswordShow(!isPasswordShow),
    [isPasswordShow]
  );

  const classes = useStyles();
  const { name, label, value, error = null, onChange, onBlur } = props;
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
        type={isPasswordShow ? "text" : "password"}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end" className={classes.eye}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleToggleVisibility}
              edge="end"
            >
              {isPasswordShow ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        InputProps={{
          className: classes.input,
        }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
