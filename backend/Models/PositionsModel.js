const { model } = require("mongoose")

const { PositionsSchema } = require('../Schema/PositionsSchema')

const PositionsModel = new model("positions", PositionsSchema)

module.exports = { PositionsModel }