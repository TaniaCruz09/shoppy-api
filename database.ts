import { ulid } from "ulid";
import mongoose from "mongoose";
import config from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
    );
    console.log("Conected to mongodb");
  } catch (error) {
    console.log("error de base de datos", error);
  }
};

export default connectDB;
