const mongoose = require("mongoose");

const relativeSchema = require("./relative");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  familyTree: [],
});

module.exports = mongoose.model("user", userSchema);
