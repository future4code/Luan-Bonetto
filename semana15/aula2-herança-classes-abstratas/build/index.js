"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("./menu");
const cashier_1 = require("./cashier");
const chef_1 = require("./chef");
const employee_1 = require("./employee");
const manager_1 = require("./manager");
const managerAndChef = new manager_1.Manager('Érick Jacquin', 15000);
const newCashier = new cashier_1.Cashier('Carlos', 1200);
const clientConsumption = menu_1.menu.slice(1, 3);
const consumptionTotal = newCashier.calculateBill(clientConsumption);
console.log(consumptionTotal);
const newChef = new chef_1.Chef('Linguini', 7000);
newChef.removeDishFromMenu('Feijoada');
newChef.addDishToMenu('Arroz', 20, 5, ['cebola', 'alho', 'arroz'], 10);
console.log('Numero de Funcionários:', employee_1.Employee.numberOfEmployees);
//# sourceMappingURL=index.js.map