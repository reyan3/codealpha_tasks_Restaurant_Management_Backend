import mongoose from "mongoose";

// Restaurant tables
const tableSchema = new mongoose.Schema({
  // Table Number
  tableNumber: {
    type: Number,
    required: true
  },

  // Maximum people
  capacity: Number,

  // Reserved or not
  isReserved: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Table", tableSchema);