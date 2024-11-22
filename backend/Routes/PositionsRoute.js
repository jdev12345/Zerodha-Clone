const { OrderstModel } = require('../Models/OrderstModel')
const router = require("express").Router();

router.get("/allOrders",async (req,res)=>{
    let allOrders = await OrderstModel.find({})
    res.json(allOrders)
  })
  

module.exports = router;