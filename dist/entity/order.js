"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId, items) {
        this._total = 0;
        this.total = () => {
            return this._items.reduce((total, item) => total + item.price, 0);
        };
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("ID is required.");
        }
        if (this._customerId.length === 0) {
            throw new Error("Customer ID is required.");
        }
        if (this._items.length === 0) {
            throw new Error("Items are required.");
        }
        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("Quantity must be greater than zero.");
        }
        return true;
    }
}
exports.default = Order;
