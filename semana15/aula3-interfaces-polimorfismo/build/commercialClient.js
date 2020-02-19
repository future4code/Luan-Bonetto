"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commerce_1 = require("./commerce");
class CommercialClient extends commerce_1.Commerce {
    constructor(clientName, clientNumber, consumedEnergy, name, cnpj, cep) {
        super(name, cnpj, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        const totalBill = this.consumedEnergy * 0.53;
        return totalBill;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=commercialClient.js.map