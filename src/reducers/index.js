const initialState = {
  employees: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        employees: action.payload,
      };
    default:
      return state;
  }
};
