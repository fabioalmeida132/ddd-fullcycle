import Product from "./product";

describe("Product unit tests", () => {
  it('should throw error when id is empty', function () {
    expect(() => new Product("", "123", 100)).toThrowError("ID is required.");
  });

  it('should throw error when name is empty', function () {
    expect(() => new Product("123", "", 100)).toThrowError("Name is required.");
  });

  it('should throw error when price is less than zero', function () {
    expect(() => new Product("123", "123", -10)).toThrowError("Price must be greater than zero.");
  });

  it('should change named', function () {
    const product = new Product("123", "123", 100);
    product.changeName("456");
    expect(product.name).toBe("456");
  });

  it('should change price', function () {
    const product = new Product("123", "123", 100);
    product.changePrice(200);
    expect(product.price).toBe(200);
  });

});
