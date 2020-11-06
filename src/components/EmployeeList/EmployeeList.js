import React, { Component } from "react";
import { connect } from "react-redux";

import { withEmployeeService } from "../hoc";
import { employeesLoaded } from "../../actions";
import { compose } from "../../utils";
import { EmployeeListItem } from "../EmployeeListItem";

import "./EmployeeList.css";

class EmployeeListItems extends Component {
  componentDidMount() {
    const { employeeService } = this.props;
    const data = employeeService.getEmployees();

    this.props.employeesLoaded(data);
  }

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

const mapDispatchToProps = {
  employeesLoaded,
};

export const EmployeeList = compose(
  withEmployeeService(),
  connect(mapStateToProps, mapDispatchToProps)
)(EmployeeListItems);
