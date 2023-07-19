import Customer from "./entity/customer";
import Address from "./entity/address";
import OrderItem from "./entity/order_item";
import Order from "./entity/order";

// RELAÇÃO DE ID
let customer = new Customer("123", "Fábio Almeida");
const address = new Address("Rua 1", "123", "18401-725", "São Paulo");
customer.Address = address;
customer.activate();

// RELAÇÃO DE OBJETO - ENTIDADE
const item1 = new OrderItem("1", "Item 1", 10, "p1", 2);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 2);
const order = new Order("1", customer.id, [item1, item2]);
