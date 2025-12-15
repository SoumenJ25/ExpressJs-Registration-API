const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth.controller");
const { registerValidator } = require("../validators/auth.validator");

router.post("/register", registerValidator, register);

module.exports = router;
