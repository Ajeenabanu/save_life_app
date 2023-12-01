const express = require("express");

const router = express.Router();

let {
  createDonor,
  donorLogin,
  createReceiver,
  receiverLogin,
  getDonors,
  getReceivers,
  getReceiverRequest,
  getSingleReceiver,
  getEditReceiver,
  getSingleDonor,
  getDonorEdit,
  getDisplay,
  getDisplayDonor,
  removeDonor,
  removReceiver,
  displayRequest,
  getMessage,
  displayMsg,
  removeRequest,
  changeStatusReject,
  changeStatusAccept,
  donorReplay,
  donorCollection,
  receiverCollection
  
} = require("../controllers/controller");

router.post("/donor_register", createDonor);
router.post("/donor_login", donorLogin);
router.get("/donor_list", getDonors);
router.get("/single_donor/:id", getSingleDonor);
router.patch("/donor_edit/:id", getDonorEdit);
router.get("/donor_edit/:id", getDisplayDonor);

router.post("/receiver_register", createReceiver);
router.post("/receiver_login", receiverLogin);
router.get("/receiver_list", getReceivers);
router.post("/receiver_request", getReceiverRequest);
router.patch("/receiver_edit/:id", getEditReceiver);
router.get("/single_receiver/:id", getSingleReceiver);
router.get("/receiver_edit/:id", getDisplay);

router.delete("/delete_donor/:id",removeDonor);
router.delete("/delete_receiver/:id",removReceiver);
router.get("/display_request",displayRequest)

router.post("/get_message",getMessage);
router.get("/get_message",displayMsg);
router.delete("/delete_request/:id",removeRequest);

router.patch('/change_status_accept/:id',changeStatusAccept)
router.patch('/change_status_reject/:id',changeStatusReject)

router.get('/donor_replay/:requsted_user_id',donorReplay)
router.get('/donor_collection',donorCollection)
router.get('/receiver_collection',receiverCollection)

module.exports = router;
