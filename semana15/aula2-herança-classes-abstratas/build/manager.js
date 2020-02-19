"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
class Manager extends cashier_1.Cashier {
    constructor(name, salary) {
        super(name, salary);
    }
    sayJob() {
        console.log("Job: Gerente");
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map