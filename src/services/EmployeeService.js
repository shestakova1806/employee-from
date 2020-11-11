export class EmployeeService {
  data = [
    {
      id: 1,
      avatar: "./Avatar.png",
      name: "Phil Schiller",
      position: "Senior Vice President, Worldwide Marketing",
      onVacation: true,
    },
    {
      id: 2,
      avatar: "./Avatar.png",
      name: "Craig Federighi",
      position: "Senior Vice President, Software Engineering",
      onVacation: false,
    },
    {
      id: 3,
      avatar: "./Avatar.png",
      name: "Eddy Cue",
      position: "Senior Vice President, Internet Software and Services",
      onVacation: false,
    },
  ];

  getEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error("Something bad happend"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
