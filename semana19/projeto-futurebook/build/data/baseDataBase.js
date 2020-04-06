"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class BaseDB {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
                port: 3306,
                user: "luan",
                password: "%HLa7uF@ioyi2O9yI!UU",
                database: "bouman-luan"
            }
        });
    }
}
exports.BaseDB = BaseDB;
