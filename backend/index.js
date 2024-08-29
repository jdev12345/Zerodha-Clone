require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002
const url = process.env.MONGO_URL

const { HoldingsModel } = require('./Models/HoldingsModel')
const { PositionsModel } = require('./Models/PositionsModel')
const { OrderstModel } = require('./Models/OrderstModel')

const authRoute = require("./Routes/AuthRoute");

// app.use(
//   // cors({
//   //   origin: ["http://localhost:3002"],
//   //   methods: ["GET", "POST", "PUT", "DELETE"],
//   //   credentials: true,
//   // })
// )
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser());


app.use("/", authRoute);

app.get("/addHoldings", async (req,res)=>{
    let tempHoldings = [
      {
        name: "INFY",
        price: 1555.45,
        percent: "-1.60%",
        isDown: true,
      },
      {
        name: "ONGC",
        price: 116.8,
        percent: "-0.09%",
        isDown: true,
      },
      {
        name: "TCS",
        price: 3194.8,
        percent: "-0.25%",
        isDown: true,
      },
      {
        name: "KPITTECH",
        price: 266.45,
        percent: "3.54%",
        isDown: false,
      },
      {
        name: "QUICKHEAL",
        price: 308.55,
        percent: "-0.15%",
        isDown: true,
      },
      {
        name: "WIPRO",
        price: 577.75,
        percent: "0.32%",
        isDown: false,
      },
      {
        name: "M&M",
        price: 779.8,
        percent: "-0.01%",
        isDown: true,
      },
      {
        name: "RELIANCE",
        price: 2112.4,
        percent: "1.44%",
        isDown: false,
      },
      {
        name: "HUL",
        price: 512.4,
        percent: "1.04%",
        isDown: false,
      },
    ]
      tempHoldings.forEach(item=>{
        let newHolding = new OrderstModel({
            name: item.name,
            price: item.price,
            percent: item.percent,
            isDown: item.isDown
        })
        newHolding.save()
    })
    res.send("Done!")
})

app.get("/addPositions", async (req,res)=>{
    let tempPositions = [
        {
          product: "CNC",
          name: "EVEREADY",
          qty: 2,
          avg: 316.27,
          price: 312.35,
          net: "+0.58%",
          day: "-1.24%",
          isLoss: true,
        },
        {
          product: "CNC",
          name: "JUBLFOOD",
          qty: 1,
          avg: 3124.75,
          price: 3082.65,
          net: "+10.04%",
          day: "-1.35%",
          isLoss: true,
        },
      ]
      tempPositions.forEach(item=>{
        let tempPositions = new PositionsModel({
            product: item.product,
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss
        })
        tempPositions.save()
    })
    res.send("Done!")
})

app.get("/allHolding",async (req,res)=>{
  let allHoldings = await HoldingsModel.find({})
  res.json(allHoldings)
})

app.get("/allPositions",async (req,res)=>{
  let allPositions = await PositionsModel.find({})
  // console.log(allPositions)
  res.json(allPositions)
})
app.get("/allOrders",async (req,res)=>{
  let allOrders = await OrderstModel.find({})
  res.json(allOrders)
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
    mongoose.connect(url)
    console.log(`Db Connected!`)
})