export class ProductsException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProductsException";
  }
}
