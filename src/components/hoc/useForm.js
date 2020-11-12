import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "470px",
      marginBottom: "15px",
    },
  },
}));

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

export const Form = (props) => {
  const classes = useStyles();

  return <form className={classes.root}>{props.children}</form>;
};
