import Table from "../models/Table.js";


// GET /api/tables
export const getTables = async (req, res) => {
    const tables = await Table.find();

    res.status(200).json(tables);
};


// POST /api/tables
export const createTable = async (req, res) => {
    const table = await Table.create(req.body);

    res.status(201).json(table);
};


// PATCH /api/tables/:id/toggle
// Toggle table reservation status

export const toggleTableReservation = async (req, res) => {

    const table = await Table.findById(req.params.id);

    if (!table) {
      return res.status(404).json({
        message: "Table not found",
      });
    }

    // Switch true -> false or false -> true
    table.isReserved = !table.isReserved;

    await table.save();

    res.status(200).json({
      message: table.isReserved
        ? "Table reserved successfully"
        : "Table released successfully",
      table,
    });
};