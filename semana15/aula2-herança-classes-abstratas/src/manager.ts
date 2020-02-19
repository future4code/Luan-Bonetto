import { Cashier } from "./cashier"

export class Manager extends Cashier {
    constructor(name:string, salary:number){
        super(name, salary)
    }

    public sayJob(): void {
        console.log("Job: Gerente")
    }
}