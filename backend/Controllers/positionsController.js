const { PositionsModel } = require("../Models/PositionsModel");

module.exports.index = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};
