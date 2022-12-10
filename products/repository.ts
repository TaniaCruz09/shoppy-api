import { ulid } from "ulid";
import { Product } from "./models";
import { Product as IProduct } from "./interfaces";

const list = async ({ trending = true, popular = true }: any) => {
  return await Product.find({ trending, popular });
};

const addProduct = async (data: IProduct) => {
  const id = ulid();
  const model = new Product({ ...data, id });

  await model.save();

  return model;
};

const getOne = async (id: string) => {
  return await Product.findOne({ id });
};

const deleteItem = async (id: string) => {
  return await Product.deleteOne({ id });
};

const update = async (id: string, data: IProduct) => {
  Product;
  const model = await Product.findOneAndUpdate({ id }, data, { new: true });

  return model;
};

export default {
  list,
  addProduct,
  getOne,
  delete: deleteItem,
  update,
};
