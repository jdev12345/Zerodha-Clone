require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002
const url = process.env.MONGO_URL

const authRoute = require("./Routes/AuthRoute");
const holdingsRoute = require("./Routes/HoldingsRoute");
const ordersRoute = require("./Routes/OrdersRute");
const positionsRoute = require("./Routes/PositionsRoute");

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser());


app.use("/auth", authRoute);

app.use("/", holdingsRoute);
app.use("/", positionsRoute);
app.use("/", ordersRoute);

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
    mongoose.connect(url)
    console.log(`Db Connected!`)
})