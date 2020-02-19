import { Employee } from "./employee";
import { menu } from "./menu"
import { Dish } from "./dish";
import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";

export class Chef extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary)
    }

    public sayJob(): void {
        console.log("Job: Chef")
    }

    public removeDishFromMenu(dishToRemove: string): void {
        menu.map(dish => {
            if (dish.getName() === dishToRemove) {
                menu.splice(menu.indexOf(dish), 1)
            }
        })
    }

    public addDishToMenu(
        name: string,
        price: number,
        cost: number,
        ingredients: string[],
        timeToCook: number,
        slicesNumber?: number | undefined
    ): void {
        if(slicesNumber === undefined){
            const newDish: Dish = new SaltyDish(name, price, cost, ingredients, timeToCook)
            menu.push(newDish)
        }else{
            const newDish: Dish = new Dessert(name, price, cost, ingredients, timeToCook, slicesNumber)
            menu.push(newDish)
        }
    }
}