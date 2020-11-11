const employeesRequested = () => {
  return {
    type: "FETCH_EMPLOYEES_REQUEST",
  };
};

const employeesLoaded = (newEmployees) => {
  return {
    type: "FETCH_EMPLOYEES_SUCCESS",
    payload: newEmployees,
  };
};

const employeesError = (error) => {
  return {
    type: "FETCH_EMPLOYEES_FAILURE",
    payload: error,
  };
};

const changedVacation = (employeeId) => {
  return {
    type: "CHANGED_VACATION",
    payload: employeeId,
  };
};

const fetchEmployees = (employeeService) => () => (dispatch) => {
  dispatch(employeesRequested());
  employeeService
    .getEmployees()
    .then((data) => dispatch(employeesLoaded(data)))
    .catch((err) => dispatch(employeesError(err)));
};

export { fetchEmployees, changedVacation };
