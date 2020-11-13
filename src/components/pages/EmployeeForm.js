import React from "react";
import { Redirect } from "react-router-dom";
import { HomePage } from "./index";
import { useForm, Form } from "../hoc/index";
import { Controls } from "../Controls/Controls";

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

// const redirectToHomePage = () => {
//   return <Redirect to="/employees" component={HomePage} />;
// };

export const EmployeeForm = () => {
  const { values, setValues, handleInputChange, errors, setErrors } = useForm(
    initialValues
  );

  const validate = () => {
    let temp = {};
    temp.firstName =
      values.firstName.length >= 2 && values.firstName.length <= 12
        ? ""
        : "This field is not valid";
    temp.lastName =
      values.lastName.length >= 2 && values.lastName.length <= 12
        ? ""
        : "This field is not valid";
    temp.phoneNumber =
      values.phoneNumber.length >= 2 && values.phoneNumber.length <= 12
        ? ""
        : "This field is not valid";
    temp.amountToInvest =
      values.amountToInvest.length !== 0 ? "" : "This field is required";
    temp.email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      values.email
    )
      ? ""
      : "Email is not valid";
    temp.confirmEmail =
      values.confirmEmail === values.email ? "" : "Email is not correct";
    temp.password =
      values.password.length >= 8 ? "" : "Minimum 8 symbols required";
    temp.confirmPassword =
      values.confirmPassword === values.password
        ? ""
        : "Password is not correct";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.alert("test");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Controls.Input
        name="firstName"
        label="First Name"
        value={values.firstName}
        onChange={handleInputChange}
        error={errors.firstName}
      />
      <Controls.Input
        name="lastName"
        label="Last Name"
        value={values.lastName}
        onChange={handleInputChange}
        error={errors.lastName}
      />
      <Controls.Input
        name="phoneNumber"
        label="Phone Number"
        value={values.phoneNumber}
        onChange={handleInputChange}
        error={errors.phoneNumber}
      />
      <Controls.Select
        name="amountToInvest"
        label="Amount To Invest"
        value={values.amountToInvest}
        onChange={handleInputChange}
        options={invest}
        error={errors.amountToInvest}
      />
      <Controls.Input
        name="email"
        label="Email"
        value={values.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <Controls.Input
        name="confirmEmail"
        label="Confirm Email"
        value={values.confirmEmail}
        onChange={handleInputChange}
        error={errors.confirmEmail}
      />
      <Controls.Input
        name="password"
        label="Password"
        value={values.password}
        onChange={handleInputChange}
        error={errors.password}
      />
      <Controls.Input
        name="confirmPassword"
        label="Confirm Password"
        value={values.confirmPassword}
        onChange={handleInputChange}
        error={errors.confirmPassword}
      />
      <Controls.Checkbox
        name="isAdult"
        label="I certify that I am 18 years of age or older, and I agree to the Terms of Service and Privacy Policy."
        value={values.isAdult}
        onChange={handleInputChange}
      />
      <Controls.Checkbox
        name="isGetNews"
        label="I would like to receive important information and periodic news updates."
        value={values.isGetNews}
        onChange={handleInputChange}
      />
      <Controls.Button text="CREATE ACCOUNT" type="Submit" />
    </Form>
  );
};
