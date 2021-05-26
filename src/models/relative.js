const mongoose = require("mongoose");

const relativeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("relative", relativeSchema);
