export class UserAccount {
    balance:number
    cpf: string
    name: string
    age: number
    //transactions: Transaction[]

    constructor(name:string, cpf:string, age:number, balance:number) {
        this.name = name
        this.cpf = cpf
        this.age = age
        this.balance = 0
    }

    getBalance():number {
        return 1
    }

    addBalance():void {

    }
}
