import React from "react";
import { TextField } from "@material-ui/core";

export const Input = (props) => {
  const { name, label, value, error = null, onChange, onBlur } = props;
  console.log("Input -> error", error);
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};
