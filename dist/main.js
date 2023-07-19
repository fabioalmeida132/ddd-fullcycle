"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./entity/customer"));
const address_1 = __importDefault(require("./entity/address"));
const order_item_1 = __importDefault(require("./entity/order_item"));
const order_1 = __importDefault(require("./entity/order"));
// RELAÇÃO DE ID
let customer = new customer_1.default("123", "Fábio Almeida");
const address = new address_1.default("Rua 1", "123", "18401-725", "São Paulo");
customer.Address = address;
customer.activate();
// RELAÇÃO DE OBJETO - ENTIDADE
const item1 = new order_item_1.default("1", "Item 1", 10);
const item2 = new order_item_1.default("2", "Item 2", 15);
const order = new order_1.default("1", customer._id, [item1, item2]);
