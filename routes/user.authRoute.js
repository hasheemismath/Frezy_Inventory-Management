const controller = require("../controllers/userController");
const express = require("express");
const {signin} = require("../controllers/user.authController");
const {createCustomer} = require("../controllers/userController");
const {createUser} = require("../controllers/userController");
const {getUser} = require("../controllers/userController");
const router = express.Router();

router.post("/user/signin",signin);


module.exports = router;
