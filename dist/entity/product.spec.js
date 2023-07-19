"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
describe("Product unit tests", () => {
    it('should throw error when id is empty', function () {
        expect(() => new product_1.default("", "123", 100)).toThrowError("ID is required.");
    });
    it('should throw error when name is empty', function () {
        expect(() => new product_1.default("123", "", 100)).toThrowError("Name is required.");
    });
    it('should throw error when price is less than zero', function () {
        expect(() => new product_1.default("123", "123", -10)).toThrowError("Price must be greater than zero.");
    });
    it('should change named', function () {
        const product = new product_1.default("123", "123", 100);
        product.changeName("456");
        expect(product.name).toBe("456");
    });
    it('should change price', function () {
        const product = new product_1.default("123", "123", 100);
        product.changePrice(200);
        expect(product.price).toBe(200);
    });
});
