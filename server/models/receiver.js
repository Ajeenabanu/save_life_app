const mongoose = require("mongoose");

const receiverSchema = mongoose.Schema({
  receiver_name: String,
  receiver_uname: String,
  receiver_password: String,
  receiver_age: Number,
  receiver_mobile: Number,
  receiver_disease: String,
  receiver_doctor: String,
  receiver_organ: String,
  receiver_blood: String,
  receiver_address: String,
});

let receiverReg = mongoose.model("receiverReg", receiverSchema);
module.exports = receiverReg;
