import mongoose from "mongoose";

// Order schema
const orderSchema = new mongoose.Schema({
  // Which table placed order
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table"
  },

  // Ordered menu items
  items: [
    {
      // Menu item reference
      menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu"
      },

      // Quantity ordered
      quantity: Number,
    }
  ],

  // Total bill amount
  totalAmount: Number,

  // Order status
  status: {
    type: String,
    enum: ["Pending", "Preparing", "Completed"],
    default: "Pending"
  }
});

export default mongoose.model("Order", orderSchema);