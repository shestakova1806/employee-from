import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withEmployeeService } from "../hoc";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { fetchEmployees, changedVacation } from "../../actions";
import { Spinner } from "../Spinner";
import { ErrorIndicator } from "../ErrorIndicator";
import { compose } from "../../utils";
import { EmployeeListItem } from "../EmployeeListItem";

import "./EmployeeList.css";

const EmployeeListItems = ({ employees, onChangedVacation }) => {
  return (
    <List>
      {employees.map((employee) => {
        return (
          <ListItem
            alignItems="flex-start"
            padding="0"
            margin="0"
            key={employee.id}
          >
            <EmployeeListItem
              employee={employee}
              onChangedVacation={() => onChangedVacation(employee.id)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

class EmployeeListItemsContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees, loading, error, onChangedVacation } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <EmployeeListItems
        employees={employees}
        onChangedVacation={onChangedVacation}
      />
    );
  }
}

const mapStateToProps = ({ employees }) => {
  return { employees };
};

const mapDispatchToProps = (dispatch, { employeeService }) => {
  return bindActionCreators(
    {
      fetchEmployees: fetchEmployees(employeeService),
      onChangedVacation: changedVacation,
    },
    dispatch
  );
};

export const EmployeeList = compose(
  withEmployeeService(),
  connect(mapStateToProps, mapDispatchToProps)
)(EmployeeListItemsContainer);
