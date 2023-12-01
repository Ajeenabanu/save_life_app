const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
  name: String,
  choose: String,
  blood: String,
  coment: String,
  requsted_user_id:String,
  statusUpdates: [
    {
      status: String,
      name: String,
      userid:String,
      mobile:Number
    },
  ],
});
let receiverRequest = mongoose.model("receiverRequest", RequestSchema);
module.exports = receiverRequest;
