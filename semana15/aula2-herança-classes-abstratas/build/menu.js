"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saltydish_1 = require("./saltydish");
const dessert_1 = require("./dessert");
const feijoada = new saltydish_1.SaltyDish("Feijoada", 100, 20, ["feijão preto", "Carne", "Bacon", "Folha de Louro"], 100);
const batataFrita = new saltydish_1.SaltyDish("Batata Frita", 20, 5, ["Batata"], 10);
const brigadeiro = new dessert_1.Dessert('Brigadeiro', 100, 20, ["leite condensado", "Achocolatado", "Manteiga"], 100, 10);
const boloDeCenoura = new dessert_1.Dessert('Bolo de Cenoura', 15, 4, ["Cenoura", "Farinha de Trigo", "ovos", "fermento"], 40, 2);
exports.menu = [
    feijoada,
    batataFrita,
    brigadeiro,
    boloDeCenoura
];
//# sourceMappingURL=menu.js.map