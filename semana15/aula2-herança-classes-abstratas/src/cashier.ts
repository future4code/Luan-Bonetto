import { Employee } from "./employee";
import { Dish } from "./dish";

export class Cashier extends Employee {
    constructor(name:string, salary:number) {
        super(name, salary)
    }

    public sayJob():void {
        console.log("Job: Caixa")
    }

    public calculateBill(consumption: Dish[]):number {
        let totalBill: number = 0
        consumption.forEach(dish => {
            totalBill += dish.getPrice()
        })
        return totalBill
    }
}