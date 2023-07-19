import Customer from "./customer";
import Address from "./address";

describe("Customer unit tests", () => {

  it('should throw error when id is empety', function () {
    expect(() => new Customer("", "Fábio Almeida")).toThrowError("ID is required.");
  });

  it('should throw error when name is empety', function () {
    expect(() => new Customer("123", "")).toThrowError("Name is required");
  });

  it('should change name', function () {
    // Arrange
    const customer = new Customer("123", "Fábio Almeida");
    // Act
    customer.changeName("Fábio Almeida 2");
    // Assert
    expect(customer.name).toBe("Fábio Almeida 2");
  });

  it('should activate customer', function () {
    const customer = new Customer("123", "Fábio Almeida");
    const address = new Address("Rua 1", "123", "18401-725", "São Paulo");
    customer.Address = address;
    customer.activate();
    expect(customer.isActivate()).toBe(true);
  });

  it('should deactivate customer', function () {
    const customer = new Customer("123", "Fábio Almeida");
    customer.deactivate()
    expect(customer.isActivate()).toBe(false);
  });

  it('should throw error when address is undefined when you activate a customer ', function () {
    const customer = new Customer("123", "Fábio Almeida");
    expect(() => customer.activate()).toThrowError("Address is required");
  });

});
