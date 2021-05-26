const User = require("../models/user");
const Relative = require("../models/relative");

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
  getUserInformation: async (req, res) => {
    const username = res.locals.user;
  },
};

module.exports = { controller };
