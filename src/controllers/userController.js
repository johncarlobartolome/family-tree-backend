const User = require("../models/user");
const Relative = require("../models/relative");
const mongoose = require("mongoose");

const controller = {
  createUser: async (req, res) => {
    const { name, familyTree } = res.locals.data;

    const relatives = familyTree.map(
      (relative) =>
        new Relative({
          name: relative.name,
          relation: relative.relation,
        })
    );
    const newUser = User({
      name,
      familyTree: relatives,
    });
    const user = await newUser.save();
    console.log(user);
    res.send(res.locals.data);
  },
  getUsers: async (req, res) => {
    const users = await User.find({});

    res.status(200).json({
      success: {
        users,
      },
    });
  },
  getUser: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(404).json({
        error: {
          title: "No user found",
          message: "This user does not exist.",
          code: 404,
        },
      });
    }

    res.status(200).json({
      success: {
        user,
      },
    });
  },
  updateUser: async (req, res) => {
    const { id, name, familyTree } = res.locals.data;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: {
          title: "No user found",
          message: "User does not exists",
          code: 404,
        },
      });
    }
    const relatives = familyTree.map(
      (relative) =>
        new Relative({
          name: relative.name,
          relation: relative.relation,
        })
    );

    user.name = name;
    user.familyTree = [...relatives];
    await user.save();

    res.send(user);
  },
  deleteUser: async (req, res) => {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    res.status(200).send(result);
  },
};

module.exports = { controller };
