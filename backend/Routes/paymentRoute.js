const express = require("express");
const { createPayment, checkPaymentStatus } = require("../Controllers/paymentController");

const router = express.Router();

router.post("/pay", createPayment);
router.post("/payCheck", checkPaymentStatus);

module.exports = router;
