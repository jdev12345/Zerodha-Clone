const axios = require("axios");
const UUID = require("uuid-int");
const Participant = require("../Models/UserModel");

const id = {}; // To keep track of intervals for transaction checks

function formatDate(date, format) {
  const ISTOptions = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const ISTDate = date.toLocaleString("en-IN", ISTOptions);

  const map = {
    mm: ISTDate.slice(3, 5),
    dd: ISTDate.slice(0, 2),
    yyyy: ISTDate.slice(6, 10),
  };

  return format.replace(/dd|mm|yyyy/gi, (matched) => map[matched]);
}

function stringToDate(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

String.prototype.shuffle = function () {
  const a = this.split(""),
    n = a.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.join("");
};

async function create(user) {
  try {
    const participant = new Participant(user);
    await participant.save();
    return true;
  } catch (e) {
    console.error(e);
    return { err: "something went wrong" };
  }
}

async function checkPayment(client_txn_id, txn_date, user) {
  await axios
    .post("https://merchant.upigateway.com/api/check_order_status", {
      client_txn_id,
      txn_date,
      key: process.env.merchant_key,
    })
    .then((res) => {
      const data = res.data;
      if (data.status === true) {
        const info = data.data;
        if (info.status === "success") {
          clearInterval(id[client_txn_id].id);
          user.client_txn_id = info.client_txn_id;
          user.upi_txn_id = info.upi_txn_id;
          user.amount = info.amount;
          user.status = true;
          user.txn_date = stringToDate(txn_date);
          create(user);
          delete id[client_txn_id];
        } else if (info.status === "failure" || id[client_txn_id].time >= 100) {
          clearInterval(id[client_txn_id].id);
          user.client_txn_id = info.client_txn_id;
          user.upi_txn_id = info.upi_txn_id;
          user.amount = info.amount;
          user.status = false;
          user.txn_date = stringToDate(txn_date);
          create(user);
          delete id[client_txn_id];
        } else {
          id[client_txn_id].time++;
        }
      }
    })
    .catch((e) => console.error(e));
}

const createPayment = async (req, res) => {
  let payload = req.body.payload;
  payload["key"] = process.env.merchant_key;
  payload["client_txn_id"] = UUID(0).uuid().toString().shuffle();
  payload["p_info"] = "UPI Payment Gateway";
  payload["redirect_url"] = process.env.fronted_url;

  const user = {
    name: payload.customer_name,
    email: payload.customer_email,
    mobileNo: payload.customer_mobile,
  };

  id[payload["client_txn_id"]] = { time: 0 };
  id[payload["client_txn_id"]].id = setInterval(
    async () =>
      await checkPayment(
        payload["client_txn_id"],
        formatDate(new Date(Date.now()), "dd-mm-yyyy"),
        user
      ),
    3000
  );

  let response = await axios
    .post("https://merchant.upigateway.com/api/create_order", payload)
    .then((res) => res.data)
    .catch((e) => console.error(e));

  res.json(response);
};

const checkPaymentStatus = async (req, res) => {
  const { client_txn_id } = req.body;

  if (!client_txn_id) return res.json({ status: false });

  const user = (await Participant.find({ client_txn_id }))[0];
  if (!user) return res.json({ status: false });

  const payload = {
    key: process.env.merchant_key,
    client_txn_id,
    txn_date: formatDate(user.txn_date, "dd-mm-yyyy"),
  };

  let response = await axios
    .post("https://merchant.upigateway.com/api/check_order_status", payload)
    .then((res) => res.data)
    .catch((e) => console.error(e));

  response["user"] = user;
  res.json(response);
};

module.exports = { createPayment, checkPaymentStatus };
