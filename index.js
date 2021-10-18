const fs = require("fs");

function findSameTimeFrame(employees) {
  const employeesCopy = [...employees];
  const employeesWithSameTimeFrame = employees.reduce(
    (acc, employee, index) => {
      employeesCopy.shift();
      employeesCopy.forEach((e, i) => {
        employee.forEach((schedule) => {
          if (employeesCopy[i].includes(schedule)) {
            const key = `${employees[index][0]}-${employeesCopy[i][0]}`;
            const sum = acc[key] + 1 || 0 + 1;
            acc = { ...acc, [key]: sum };
          }
        });
      });
      return acc;
    },
    {}
  );

  for (e in employeesWithSameTimeFrame) {
    console.log(`${e}: ${employeesWithSameTimeFrame[e]}`);
  }
}

const employees = fs
  .readFileSync("employees.txt", "utf8")
  .trim()
  .split("\r\n")
  .map((line) => line.split(/=|,/g));

findSameTimeFrame(employees);
