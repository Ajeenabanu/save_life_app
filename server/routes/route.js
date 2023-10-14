const express = require("express");

const router = express.Router();

let {
  createDonor,
  donorLogin,
  createReceiver,
  receiverLogin,
  getDonors,
  getReceivers,
} = require("../controllers/controller");

router.post("/donor_register", createDonor);
router.post("/donor_login", donorLogin);
router.post("/receiver_register", createReceiver);
router.post("/receiver_login", receiverLogin);
router.get("/donor_list", getDonors);
router.get("/receiver_list",getReceivers);

module.exports = router;
