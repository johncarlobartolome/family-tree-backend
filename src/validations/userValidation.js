const validate = {
  createUser: async (req, res, next) => {
    // Check if name is supplied
    const invalidParams = [];

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
  updateUser: async (req, res, next) => {
    const id = req.params.id;
    const { name, familyTree } = req.body;
    const invalidParams = [];
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

    res.locals.data = {
      id,
      name,
      familyTree,
    };

    next();
  },
};

module.exports = { validate };
