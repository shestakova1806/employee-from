import React from "react";

import { EmployeeServiceConsumer } from "../EmployeeServiceContext";

export const withEmployeeService = () => (Wrapped) => {
  return (props) => {
    return (
      <EmployeeServiceConsumer>
        {(employeeService) => {
          return <Wrapped {...props} employeeService={employeeService} />;
        }}
      </EmployeeServiceConsumer>
    );
  };
};
