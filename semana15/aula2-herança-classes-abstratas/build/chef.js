"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const menu_1 = require("./menu");
const saltydish_1 = require("./saltydish");
const dessert_1 = require("./dessert");
class Chef extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    sayJob() {
        console.log("Job: Chef");
    }
    removeDishFromMenu(dishToRemove) {
        menu_1.menu.map(dish => {
            if (dish.getName() === dishToRemove) {
                menu_1.menu.splice(menu_1.menu.indexOf(dish), 1);
            }
        });
    }
    addDishToMenu(name, price, cost, ingredients, timeToCook, slicesNumber) {
        if (slicesNumber === undefined) {
            const newDish = new saltydish_1.SaltyDish(name, price, cost, ingredients, timeToCook);
            menu_1.menu.push(newDish);
        }
        else {
            const newDish = new dessert_1.Dessert(name, price, cost, ingredients, timeToCook, slicesNumber);
            menu_1.menu.push(newDish);
        }
    }
}
exports.Chef = Chef;
//# sourceMappingURL=chef.js.map