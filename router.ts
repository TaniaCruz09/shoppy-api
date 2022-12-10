import { Express } from "express";
import authRouter from "./auth/router";
import productRouter from "./products/router";

const router = (app: Express) => {
  app.get("/", (req, res) => {
    res.json({
      message: "its working",
    });
  });
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
};

export default router;
