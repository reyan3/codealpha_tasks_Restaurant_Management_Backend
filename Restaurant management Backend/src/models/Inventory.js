import mongoose from "mongoose";

// Inventory schema
const inventorySchema = new mongoose.Schema(
  {
    // Example: Burger Bun
    itemName: {
      type: String,
      required: true,
    },

    // Current stock quantity
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Inventory", inventorySchema);
