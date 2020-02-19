import { Client } from "./client";

export class ClientManager {

    public clients: Client[]

    constructor() {
        this.clients = []
    }

    addClient(client: Client): void {
        this.clients.push(client)
    }

    getClientsQuantity(): number {
        let quantity: number = this.clients.length
        return quantity
    }

    printClientBills(): void {
        this.clients.forEach(client => {
            console.log(`${client.clientNumber} - ${client.clientName} - ${client.calculateBill}`)
        });
    }

    calculateAllIncome(): void {
        let allIncome: number = 0
        this.clients.forEach( client => {
            allIncome += client.calculateBill()
        });
        console.log(`Total a receber: R$${allIncome}`) 
    }
}
