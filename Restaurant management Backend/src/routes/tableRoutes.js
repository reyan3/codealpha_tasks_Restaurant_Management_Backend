import express from "express";
import {
  getTables,
  createTable,
  toggleTableReservation,
} from "../controllers/tableController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Get all tables
router.get("/", authMiddleware , getTables);

// Create new table
router.post("/",authMiddleware , adminMiddleware , createTable);

// Toggle for table Reservation
router.patch("/:id/toggle", authMiddleware  , adminMiddleware , toggleTableReservation);

export default router;
