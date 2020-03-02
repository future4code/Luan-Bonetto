"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userAccount_1 = require("./userAccount");
class Bank {
    createAccount(name, cpf, idade, balance) {
        const client = new userAccount_1.UserAccount(name, cpf, idade, balance);
        console.log(client);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map