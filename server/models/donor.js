const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
  donor_name: String,
  donor_uname: String,
  donor_password: String,
  donor_age: Number,
  donor_mobile: Number,
  donor_organ: String,
  donor_blood: String,
  donor_address: String,
});
let donorReg = mongoose.model("donorReg", donorSchema);

module.exports = donorReg;
