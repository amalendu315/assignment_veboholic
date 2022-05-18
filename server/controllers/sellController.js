const sellSchema = require("../models/sellModal");

exports.storeSell = async (req, res) => {
  try {
    const sell = await sellSchema.create({
      sellRate: Math.floor(Math.random() * 10),
      sellQuantity: Math.floor(Math.random() * 1000) + 35000,
    });
    if (!sell)
      return res.status(400).json({ success: false, message: "No Data Found" });
    res.status(201).json({
      success: true,
      sell,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllSellList = async (req, res) => {
  try {
    const sells = await sellSchema.find({});
    if (!sells)
      return res.status(400).json({ success: false, message: "No Data Found" });
    res.status(201).json({
      success: true,
      sells,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
