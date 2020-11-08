export class EmployeeService {
  getEmployees() {
    return [
      {
        id: 1,
        avatar: "./avatar.png",
        name: "Phil Schiller",
        position: "Senior Vice President, Worldwide Marketing",
        onVacation: true,
      },
      {
        id: 2,
        avatar: "./avatar.png",
        name: "Craig Federighi",
        position: "Senior Vice President, Software Engineering",
        onVacation: false,
      },
      {
        id: 3,
        avatar: "./avatar.png",
        name: "Eddy Cue",
        position: "Senior Vice President, Internet Software and Services",
        onVacation: false,
      },
    ];
  }
}
