const { HoldingsModel } = require("../Models/HoldingsModel");

module.exports.index = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};
