export const reducer = (state, action) => {
  if (state === undefined) {
    return {
      employees: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_EMPLOYEES_REQUEST":
      return {
        employees: [],
        loading: true,
        error: null,
      };
    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        employees: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_EMPLOYEES_FAILURE":
      return {
        employees: [],
        loading: false,
        error: action.payload,
      };
    case "CHANGED_VACATION":
      return {
        ...state,
        employees: state.employees.map((employees) => {
          if (employees.id !== action.payload) {
            return employees;
          }

          return {
            ...employees,
            onVacation: !employees.onVacation,
          };
        }),
      };
    default:
      return state;
  }
};
