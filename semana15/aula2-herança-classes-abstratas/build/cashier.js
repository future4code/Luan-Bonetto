"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    sayJob() {
        console.log("Job: Caixa");
    }
    calculateBill(consumption) {
        let totalBill = 0;
        consumption.forEach(dish => {
            totalBill += dish.getPrice();
        });
        return totalBill;
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map