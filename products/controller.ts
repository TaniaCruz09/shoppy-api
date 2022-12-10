import { Product } from "./interfaces";
import repository from "./repository";
import validations from "./validations";

const list = async (query: any) => {
  const list = await repository.list(query);

  const data = {
    data: list,
    pagination: {
      nextPage: 2,
      currentPage: 1,
      perPage: 20,
    },
  };

  return data;
};

const addProduct = async (data: Product) => {
  validations.validateProductInput(data);

  const model = await repository.addProduct(data);
  return model;
};

const getOne = async (id: string) => {
  const model = await repository.getOne(id);
  if (!model) throw new Error("Product not found");

  return model;
};

const deleteItem = async (id: string) => {
  const model = await repository.getOne(id);
  if (!model) throw new Error("Product not found");

  return await repository.delete(id);
};

const update = async (id: string, data: Product) => {
  // TODO: validar que los datos sean correctos
  const model = await repository.getOne(id);
  if (!model) throw new Error("Product not found");

  const modelUpdated = await repository.update(id, data);
  return modelUpdated;
};

export default {
  list,
  addProduct,
  getOne,
  delete: deleteItem,
  update,
};
