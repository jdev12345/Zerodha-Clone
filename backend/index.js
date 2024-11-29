require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const holdingsRoute = require("./Routes/holdingsRoute");
const positionsRoute = require("./Routes/positionsRoute");
const userRoute = require("./Routes/userRoute");
const orderRoute = require("./Routes/orderRoute");
const paymentRoute = require("./Routes/paymentRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);
app.use("/payment", paymentRoute);

app.listen(port, async () => {
  console.log(`App Is listening On ${port}`);
  await mongoose.connect(url).then(() => console.log("Connected To DB"));
});
