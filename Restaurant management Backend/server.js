import express from "express";
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
import menuRoutes from "./src/routes/menuRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import tableRoutes from "./src/routes/tableRoutes.js";
import inventoryRoutes from "./src/routes/inventoryRoutes.js";
import authRoutes from "./src/routes/authRoutes.js"
import { errorHandler } from "./src/middlewares/error.middleware.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Restaurant Backend Working!"));
app.use(express.json());


//   API Routes : 
//   /api/menu
//   /api/orders
//   /api/tables
//   /api/inventory

app.use("/api/auth" , authRoutes)
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/inventory", inventoryRoutes)
app.use(errorHandler)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
