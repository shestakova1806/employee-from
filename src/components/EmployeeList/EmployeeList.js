import React, { Component } from "react";
import { connect } from "react-redux";
import { withEmployeeService } from "../hoc";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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
      <List>
        {employees.map((employee) => {
          return (
            <ListItem alignItems="flex-start" key={employee.id}>
              <EmployeeListItem employee={employee} />
            </ListItem>
          );
        })}
      </List>
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
