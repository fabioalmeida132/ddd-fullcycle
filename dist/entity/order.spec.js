"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("Order unit tests", () => {
    it('should throw error when id is empty', function () {
        expect(() => new order_1.default("", "123", [])).toThrowError("ID is required.");
    });
    it('should throw error when customerID is empty ', function () {
        expect(() => new order_1.default("1", "", [])).toThrowError("Customer ID is required.");
    });
    it('should throw error when items is empty ', function () {
        expect(() => new order_1.default("1", "123", [])).toThrowError("Items are required.");
    });
    it('should return total when items is not empty ', function () {
        const orderItem1 = new order_item_1.default("1", "Item 1", 10, "p1", 2);
        const orderItem2 = new order_item_1.default("2", "Item 2", 15, "p2", 2);
        const order = new order_1.default("1", "123", [orderItem1, orderItem2]);
        expect(order.total()).toBe(50);
    });
    it('should throw error if the quantity is less or equal zero', function () {
        const orderItem1 = new order_item_1.default("1", "Item 1", 10, "p1", 0);
        expect(() => new order_1.default("1", "123", [orderItem1])).toThrowError("Quantity must be greater than zero.");
    });
});
