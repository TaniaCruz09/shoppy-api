import { Product } from "./interfaces";
import { ProductsException } from "./exceptions";

const validateProductInput = (data: Product) => {
  if (!data.name) throw new ProductsException("Property title is missing");
  if (data.name.length < 3)
    throw new ProductsException("Property title must be at least 3 characters");
  if (data.name.length > 30)
    throw new ProductsException("Property title must be at most 20 characters");
  if (!data.price) throw new ProductsException("Property image is missing");
};

export default {
  validateProductInput,
};
