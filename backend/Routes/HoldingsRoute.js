const { HoldingsModel } = require('../Models/HoldingsModel')
const router = require("express").Router();

router.get("/allHoldings",async (req,res)=>{
    let allHoldings = await HoldingsModel.find({})
    res.json(allHoldings)
  })
  

module.exports = router;