import { UserAccount } from "./userAccount"
import { JSONFileManager } from "./JSONFileManager"

export class Bank {
    accounts: UserAccount[]
    fileManager: JSONFileManager

    constructor() {
        this.accounts = this.getAllAccounts()
    }

    createAccount(name:string, cpf:string, idade:number, balance:number):void {
        const client = new UserAccount(name, cpf, idade, balance)
        console.log(client)
    }

    getAllAccounts():UserAccount[] {
        return
    }

}