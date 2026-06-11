import mongoose from "mongoose";

// Menu item schema
const menuSchema = new mongoose.Schema(
  {
    // Example: Burger
    name: {
      type: String,
      required: true,
    },

    // Example: 250
    price: {
      type: Number,
      required: true,
    },

    inventoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
    },

    // Example: Fast Food
    category: String,

    // Whether item is available
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Menu", menuSchema);
