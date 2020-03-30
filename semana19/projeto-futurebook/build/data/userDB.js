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
const baseDataBase_1 = require("./baseDataBase");
const user_1 = require("../business/entities/user");
class UserDB extends baseDataBase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.usersTableName = "users_futurebook";
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.insert({
                id: user.getId,
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword
            }).into(this.usersTableName);
        });
    }
}
exports.UserDB = UserDB;
const teste = new UserDB();
teste.createUser(new user_1.User("1", "teste", "teste@email.com", "senhateste"));
