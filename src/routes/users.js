const express = require("express");
const router = express.Router();

const { validate } = require("../validations/userValidation");
const { controller } = require("../controllers/userController");

// @router  POST /users
// @desc    Create a user with family tree
// @access  Public
router.post("/", validate.createUser, controller.createUser);

// @router  GET /users
// @desc    Get all users
// @access  Public
router.get("/", controller.getUsers);

// @router  GET /users/:id
// @desc    Get a user information
// @access  Public
router.get("/:id", controller.getUser);

// @router  PATCH /users/:id
// @desc    Update a user
// @access  Public
router.patch("/:id", validate.updateUser, controller.updateUser);

// @router  DELETE /users/:id
// @desc    Delete a user
// @access  Public
router.delete("/:id", controller.deleteUser);

module.exports = router;
