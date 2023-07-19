"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
const address_1 = __importDefault(require("./address"));
describe("Customer unit tests", () => {
    it('should throw error when id is empety', function () {
        expect(() => new customer_1.default("", "Fábio Almeida")).toThrowError("ID is required.");
    });
    it('should throw error when name is empety', function () {
        expect(() => new customer_1.default("123", "")).toThrowError("Name is required");
    });
    it('should change name', function () {
        // Arrange
        const customer = new customer_1.default("123", "Fábio Almeida");
        // Act
        customer.changeName("Fábio Almeida 2");
        // Assert
        expect(customer.name).toBe("Fábio Almeida 2");
    });
    it('should activate customer', function () {
        const customer = new customer_1.default("123", "Fábio Almeida");
        const address = new address_1.default("Rua 1", "123", "18401-725", "São Paulo");
        customer.Address = address;
        customer.activate();
        expect(customer.isActivate()).toBe(true);
    });
    it('should deactivate customer', function () {
        const customer = new customer_1.default("123", "Fábio Almeida");
        customer.deactivate();
        expect(customer.isActivate()).toBe(false);
    });
    it('should throw error when address is undefined when you activate a customer ', function () {
        const customer = new customer_1.default("123", "Fábio Almeida");
        expect(() => customer.activate()).toThrowError("Address is required");
    });
});
