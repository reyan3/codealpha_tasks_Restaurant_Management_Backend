import Menu from "../models/Menu.js";

// Get all menu items
export const getMenu = async (req, res) => {
  const menu = await Menu.find();
  res.status(200).json(menu);
};

// Add new menu item
export const addMenuItem = async (req, res) => {
  const item = await Menu.create(req.body);
  res.status(201).json(item);
};
