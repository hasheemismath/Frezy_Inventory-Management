const controller = require("../controllers/userController");
const express = require("express");
const {createCustomer} = require("../controllers/userController");
const {createUser} = require("../controllers/userController");
const {getUser} = require("../controllers/userController");
const router = express.Router();


router.get("/user/get",getUser);

router.post("/user/add",createUser);
router.post("/user/add/customer",createCustomer);

module.exports = router;