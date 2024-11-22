const { PositionsModel } = require('../Models/PositionsModel')
const router = require("express").Router();

router.get("/allPositions",async (req,res)=>{
    let allPositions = await PositionsModel.find({})
    // console.log(allPositions)
    res.json(allPositions)
  })

module.exports = router;