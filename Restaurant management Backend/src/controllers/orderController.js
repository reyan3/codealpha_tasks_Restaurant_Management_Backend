import Order from "../models/Order.js";
import Menu from "../models/Menu.js";
import Table from "../models/Table.js";
import Inventory from "../models/Inventory.js";

//   GET /api/orders
//   Fetch all orders
export const getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("tableId")
    .populate("items.menuId");

  res.status(200).json(orders);
};

//   GET /api/orders/:id
//   Fetch single order
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("tableId")
    .populate("items.menuId");

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  res.status(200).json(order);
};

//   POST /api/orders
//   Create new order
export const createOrder = async (req, res) => {
  const { tableId, items } = req.body;

  //   Ensure that the table isnt booked already
  const table = await Table.findById(tableId);
  if (table.isReserved) {
    return res.status(400).json({
      message: "Please reserve other table, this table is currently fully reserved!",
    });
  }

  let totalAmount = 0;

  // Calculate bill amount
  for (const item of items) {
    const menuItem = await Menu.findById(item.menuId);

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }

    totalAmount += menuItem.price * item.quantity;
  }

  const order = await Order.create({
    tableId,
    items,
    totalAmount,
  });

  // Dec quantity from inventory also
  for (const item of items) {
    const menuItem = await Menu.findById(item.menuId);

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found",
      });
    }
    await Inventory.findByIdAndUpdate(menuItem.inventoryId, {
      $inc: {
        quantity: -item.quantity,
      },
    });
  }

  res.status(201).json(order);
};

// PATCH /api/orders/:id
//   Update order status
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  order.status = status;

  await order.save();
  res.status(200).json(order);
};
