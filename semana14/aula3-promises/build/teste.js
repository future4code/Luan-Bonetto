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
const fs_1 = require("fs");
const path = "./src/textos";
const readAllFilesFolder = new Promise((resolve, reject) => {
    fs_1.readdir(path, (err, folder) => {
        folder.forEach(file => {
            fs_1.readFile(`${path}/${file}`, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                console.log(data.toString());
                resolve(data.toString());
            });
        });
    });
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allContent = yield readAllFilesFolder;
        console.log(allContent);
    }
    catch (error) {
        console.error("Promisse Falhou", error);
    }
});
init();
//# sourceMappingURL=teste.js.map