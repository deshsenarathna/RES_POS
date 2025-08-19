const express = require("express");
const router = express.Router();
const { isVerifiedUser } = require("../middlewares/tokenVerification");
const { create } = require("../models/userModel");
const { createOrder } = require("../controllers/paymentController");
const { verifyPayment } = require("../controllers/paymentController");
 
router.route("/create-order").post(isVerifiedUser, createOrder);
router.route("/verifyPayment").post(isVerifiedUser, verifyPayment);

module.exports = router;