import express from "express";
import {
  getInventory,
  createInventoryItem,
  updateInventory,
  deleteInventoryItem,
} from "../controllers/inventoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Get all inventory items
router.get("/", authMiddleware, adminMiddleware, getInventory);

// Create inventory item
router.post("/", authMiddleware, adminMiddleware, createInventoryItem);

// Update inventory quantity
router.patch("/:id", authMiddleware, adminMiddleware, updateInventory);

// Delete inventory item
router.delete("/:id", authMiddleware, adminMiddleware, deleteInventoryItem);

export default router;
