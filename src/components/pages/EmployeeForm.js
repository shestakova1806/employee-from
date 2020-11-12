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

const redirectToHomePage = () => {
  return <Redirect to="/employees" component={HomePage} />;
};

export const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <Controls.Input
        name="firstName"
        label="First Name"
        value={values.firstName}
        onChange={handleInputChange}
      />
      <Controls.Input
        name="lastName"
        label="Last Name"
        value={values.lastName}
        onChange={handleInputChange}
      />
      <Controls.Input
        name="phoneNumber"
        label="Phone Number"
        value={values.phoneNumber}
        onChange={handleInputChange}
      />
      <Controls.Select
        name="amountToInvest"
        label="Amount To Invest"
        value={values.amountToInvest}
        onChange={handleInputChange}
        options={invest}
      />
      <Controls.Input
        name="email"
        label="Email"
        value={values.email}
        onChange={handleInputChange}
      />
      <Controls.Input
        name="confirmEmail"
        label="Confirm Email"
        value={values.confirmEmail}
        onChange={handleInputChange}
      />
      <Controls.Input
        name="password"
        label="Password"
        value={values.password}
        onChange={handleInputChange}
      />
      <Controls.Input
        name="confirmPassword"
        label="Confirm Password"
        value={values.confirmPassword}
        onChange={handleInputChange}
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
      <Controls.Button text="CREATE ACCOUNT" onClick={redirectToHomePage} />
    </Form>
  );
};
