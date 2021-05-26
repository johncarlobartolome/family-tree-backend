const express = require("express");
const router = express.Router();

const { validate } = require("../validations/userValidation");
const { controller } = require("../controllers/userController");

router.post("/", validate.createUser, controller.createUser);

module.exports = router;
