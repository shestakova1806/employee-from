const employeesLoaded = (newEmployees) => {
  return {
    type: "FETCH_EMPLOYEES_SUCCESS",
    payload: newEmployees,
  };
};

export { employeesLoaded };
