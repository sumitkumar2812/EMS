const express = require("express");
const { loginController, resisterController } = require("../controllers/userController");

const router = express.Router()

//post route

router.post("/login", loginController)

router.post("/register", resisterController)

module.exports = router;