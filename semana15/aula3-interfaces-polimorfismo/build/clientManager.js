"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        let quantity = this.clients.length;
        return quantity;
    }
    printClientBills() {
        this.clients.forEach(client => {
            console.log(`${client.clientNumber} - ${client.clientName} - ${client.calculateBill}`);
        });
    }
    calculateAllIncome() {
        let allIncome = 0;
        this.clients.forEach(client => {
            allIncome += client.calculateBill();
        });
        console.log(`Total a receber: R$${allIncome}`);
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=clientManager.js.map