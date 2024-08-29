const { model } = require("mongoose")

const { OrdersSchema } = require('../Schema/OrdersSchema')

const OrderstModel = new model("orders", OrdersSchema)

module.exports = { OrderstModel }