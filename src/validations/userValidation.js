const validator = require("validator");

const Relative = require("../models/relative");

const validate = {
  createUser: async (req, res, next) => {
    // Check if name is supplied
    const invalidParams = [];
    const relatives = [];

    const { name, familyTree } = req.body;
    if (!name) {
      invalidParams.push({
        param: "name",
        message: "Name is required.",
      });
    }
    if (!Array.isArray(familyTree)) {
      invalidParams.push({
        param: "familyTree",
        message: "Invalid family tree data",
      });
    }

    if (invalidParams.length != 0) {
      return res.status(422).json({
        error: {
          title: "Invalid parameters",
          message: "Please make sure you input valid parameters",
          code: 422,
          invalidParams,
        },
      });
    }

    res.locals.data = { name, familyTree };

    next();
  },
  getUserInformation: async (req, res, next) => {
    const { username } = req.params;
    if (!username) {
      return res.status(404).json({
        error: {
          title: "User not found",
          message: "This user does not exists",
          code: 404,
        },
      });
    }

    next();
  },
};

module.exports = { validate };
