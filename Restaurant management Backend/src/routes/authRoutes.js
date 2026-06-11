import { signUp } from "../controllers/authController.js";
import { Login } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", Login);

export default router;
