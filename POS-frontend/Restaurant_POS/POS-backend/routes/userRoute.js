const express = require('express');
const { register, login, getUserDate } = require('../controllers/userController');
const { isVerifiedUser } = require('../middlewares/tokenVerification');

const router = express.Router();

//authentication routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(isVerifiedUser , getUserDate);

module.exports = router;