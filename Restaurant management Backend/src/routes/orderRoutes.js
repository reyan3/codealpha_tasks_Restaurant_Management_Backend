import express from "express";

import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Get all orders
router.get("/", authMiddleware ,getOrders);

// Get one order
router.get("/:id", authMiddleware ,getOrderById);

// Create order
router.post("/", authMiddleware , createOrder);

// Update status
router.patch("/:id", authMiddleware ,adminMiddleware , updateOrderStatus);

export default router;