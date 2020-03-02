"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        Employee.numberOfEmployees += 1;
    }
}
exports.Employee = Employee;
Employee.numberOfEmployees = 0;
//# sourceMappingURL=employee.js.map