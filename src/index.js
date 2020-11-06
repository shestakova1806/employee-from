import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./components/App";
import { ErrorBoundry } from "./components/ErrorBoundry";
import { EmployeeService } from "./services/EmployeeService";
import { EmployeeServiceProvider } from "./components/EmployeeServiceContext";

import { store } from "./store";

const employeeService = new EmployeeService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <EmployeeServiceProvider value={employeeService}>
        <Router>
          <App />
        </Router>
      </EmployeeServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
