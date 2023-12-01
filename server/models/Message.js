const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: String,
  mobile: Number,
  comment: String,
});
let message = mongoose.model("message", messageSchema);

module.exports = message;
