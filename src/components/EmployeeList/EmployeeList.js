import React, { Component } from "react";
import { connect } from "react-redux";

import { EmployeeListItem } from "../EmployeeListItem";

import "./EmployeeList.css";

class EmployeeListItems extends Component {
  render() {
    const { employees } = this.props;
    return (
      <ul className="employeeList">
        {employees.map((employee) => {
          return (
            <li key={employee.id}>
              <EmployeeListItem employee={employee} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ employees }) => {
  return { employees };
};

export const EmployeeList = connect(mapStateToProps)(EmployeeListItems);
