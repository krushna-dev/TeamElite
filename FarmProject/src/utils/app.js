import express from "express";
import cors from "cors";

const app = express();

const LIMIT = "16kb";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: LIMIT }));
app.use(express.urlencoded({ extended: true, limit: LIMIT }));
app.use(express.static("public"));

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/orderController.js";

// User Routes
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

// Product Routes
app.get("/products", getAllProducts);
app.get("/products/:id", getProductById);
app.post("/products", createProduct);
app.put("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

// Order Routes
app.get("/orders", getAllOrders);
app.get("/orders/:id", getOrderById);
app.post("/orders", createOrder);
app.put("/orders/:id", updateOrder);
app.delete("/orders/:id", deleteOrder);

export { app };
