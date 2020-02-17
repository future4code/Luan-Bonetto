"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('pt-br');
const getAllAccounts_1 = require("./getAllAccounts");
function createAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        const list = yield getAllAccounts_1.getAllAccounts();
        const newUser = {
            name: "Luan",
            cpf: 18337496770,
            dateOfBirth: moment('15/03/1997', 'DD/MM/YYYY').format('DD/MM/YYYY'),
            balance: 0,
            extract: []
        };
        console.log(newUser);
    });
}
module.exports = createAccount;
//# sourceMappingURL=createAccount.js.map