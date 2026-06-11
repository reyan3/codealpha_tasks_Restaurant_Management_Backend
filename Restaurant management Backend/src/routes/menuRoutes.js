import express from "express";

import {
  getMenu,
  addMenuItem
} from "../controllers/menuController.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

//   GET  /api/menu
//   Fetch all menu items
router.get("/", getMenu);

//   POST /api/menu
//   Create a new menu item
router.post("/", authMiddleware , adminMiddleware , addMenuItem);

export default router;