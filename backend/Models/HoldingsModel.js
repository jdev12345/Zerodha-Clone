const { model } = require("mongoose")

const { HoldingsSchema } = require('../Schema/HoldingsSchema')

const HoldingsModel = new model("holdings", HoldingsSchema)

module.exports = { HoldingsModel }