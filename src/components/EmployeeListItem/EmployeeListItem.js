import React from "react";

import "./EmployeeListItem.css";

export const EmployeeListItem = ({ employee }) => {
  const { name, position, onVacation } = employee;
  return (
    <div className="employeeListItem">
      <div>{name}</div>
      <div>{position}</div>
      <div>{onVacation}</div>
    </div>
  );
};
