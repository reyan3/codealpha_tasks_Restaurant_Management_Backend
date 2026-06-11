import Inventory from "../models/Inventory.js";

//   GET /api/inventory
//   Fetch all inventory items

export const getInventory = async (req, res) => {
  const inventory = await Inventory.find();

  res.status(200).json(inventory);
};

//   POST /api/inventory
//   Add new inventory item
export const createInventoryItem = async (req, res) => {
  const item = await Inventory.create(req.body);

  res.status(201).json(item);
};

//   PATCH /api/inventory/:id
//   Update inventory quantity
export const updateInventory = async (req, res) => {
  const item = await Inventory.findById(req.params.id);

  if (!item) {
    return res.status(404).json({
      message: "Inventory item not found",
    });
  }

  item.quantity = req.body.quantity;

  await item.save();

  res.status(200).json(item);
};

//   DELETE /api/inventory/:id
//   Remove inventory item

export const deleteInventoryItem = async (req, res) => {
  const item = await Inventory.findByIdAndDelete(req.params.id);

  if (!item) {
    return res.status(404).json({
      message: "Inventory item not found",
    });
  }

  res.status(200).json({
    message: "Inventory item deleted successfully",
  });
};
