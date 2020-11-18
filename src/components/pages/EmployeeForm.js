import React from "react";
import { withRouter } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Controls } from "../Controls/Controls";
import { makeStyles } from "@material-ui/core";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "Minimum 2 chars")
    .max(12, "Maximum 12 chars")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Minimum 2 chars")
    .max(12, "Maximum 12 chars")
    .required("Last name is required"),
  phoneNumber: yup
    .string()
    .min(2, "Minimum 2 chars")
    .max(12, "Maximum 12 chars")
    .required("Phone number is required"),
  amountToInvest: yup
    .string()
    .oneOf(["1000", "5000", "10000"], "Invalid amount")
    .required("Amount to invest is required"),
  email: yup
    .string()
    .min(2, "Minimum 2 chars")
    .max(12, "Maximum 12 chars")
    .required("Email is required"),
  confirmEmail: yup
    .string()
    .min(2, "Minimum 2 chars")
    .max(12, "Maximum 12 chars")
    .required("Confirming email is required")
    .oneOf([yup.ref("email")], "Email does not match"),
  password: yup
    .string()
    .min(8, "Minimum 8 chars")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "Minimum 8 chars")
    .required("Password is required")
    .oneOf([yup.ref("password")], "Password does not match"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  amountToInvest: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  isAdult: false,
  isGetNews: false,
};

const invest = [
  {
    id: 1,
    value: "1000",
    label: "1000",
  },
  {
    id: 2,
    value: "5000",
    label: "5000",
  },
  {
    id: 3,
    value: "10000",
    label: "10000",
  },
];

const useStyles = makeStyles({
  root: {
    width: "470px",
    height: "790px",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "25px",
    marginBottom: "40px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",

    margin: "7px 44px 21px 46px",
  },
});

const Form = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      props.history.push("/employees");
    },
  });

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root}>
      <div className={classes.header}>Sign up</div>
      <div className={classes.row}>
        <Controls.Input
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <Controls.Input
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.lastName && formik.errors.lastName}
          className={classes.controls}
        />
      </div>
      <div className={classes.row}>
        <Controls.Input
          name="phoneNumber"
          label="Phone Number"
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          className={classes.controls}
        />
        <Controls.Select
          name="amountToInvest"
          label="Amount To Invest"
          value={formik.values.amountToInvest}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          options={invest}
          error={formik.touched.amountToInvest && formik.errors.amountToInvest}
        />
      </div>
      <div className={classes.row}>
        <Controls.Input
          name="email"
          label="Email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
        />
      </div>
      <div className={classes.row}>
        <Controls.Input
          name="confirmEmail"
          label="Confirm Email"
          value={formik.values.confirmEmail}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.confirmEmail && formik.errors.confirmEmail}
        />
      </div>
      <div className={classes.row}>
        <Controls.Input
          name="password"
          label="Password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
        />
      </div>
      <div className={classes.row}>
        <Controls.Input
          name="confirmPassword"
          label="Confirm Password"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
      </div>
      <Controls.Checkbox
        name="isAdult"
        label="I certify that I am 18 years of age or older, and I agree to the Terms of Service and Privacy Policy."
        value={formik.values.isAdult}
        onChange={formik.handleChange}
      />
      <Controls.Checkbox
        name="isGetNews"
        label="I would like to receive important information and periodic news updates."
        value={formik.values.isGetNews}
        onChange={formik.handleChange}
      />
      <Controls.Button
        text="CREATE ACCOUNT"
        type="Submit"
        disabled={!(formik.isValid && formik.dirty)}
      />
    </form>
  );
};

export const EmployeeForm = withRouter(Form);
