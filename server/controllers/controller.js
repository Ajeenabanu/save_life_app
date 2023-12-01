const express = require("express");
const router = express.Router();

// models
const donorReg = require("../models/donor");
const receiverReg = require("../models/receiver");
const receiverRequest = require("../models/Request");
const message = require("../models/Message");
// donor register

const createDonor = async (req, res) => {
  const {
    donor_name,
    donor_uname,
    donor_password,
    donor_age,
    donor_mobile,
    donor_organ,
    donor_blood,
    donor_address,
  } = req.body;

  const newDonor = new donorReg({
    donor_name,
    donor_uname,
    donor_password,
    donor_age,
    donor_mobile,
    donor_organ,
    donor_blood,
    donor_address,
  });

  try {
    if (
      !donor_name ||
      !donor_uname ||
      !donor_password ||
      !donor_age ||
      !donor_mobile ||
      !donor_organ ||
      !donor_blood ||
      !donor_address
    ) {
      res.send("please enter all fields");
    } else {
      newDonor.save();

      res.status(201).json(newDonor);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// donor login
const donorLogin = async (req, res) => {
  const { donor_uname, donor_password } = req.body;
  // console.log(donor_uname);
  const user = await donorReg.findOne({ donor_uname: donor_uname });
  // validation
  if (user) {
    if (user.donor_password === donor_password) {
      res.json({
        message: "Login successfully",
        id: user._id,
        blood: user.donor_blood,
        name: user.donor_name,
        mobile: user.donor_mobile
      });
    } else {
      res.json("password is incorrect");
    }
  } else {
    res.json("Donor is not exist");
  }
};

// reciever Register

const createReceiver = async (req, res) => {
  const {
    receiver_name,
    receiver_uname,
    receiver_password,
    receiver_age,
    receiver_mobile,
    receiver_disease,
    receiver_doctor,
    receiver_organ,
    receiver_blood,
    receiver_address,
  } = req.body;

  const newReceiver = new receiverReg({
    receiver_name,
    receiver_uname,
    receiver_password,
    receiver_age,
    receiver_mobile,
    receiver_disease,
    receiver_doctor,
    receiver_organ,
    receiver_blood,
    receiver_address,
  });

  try {
    if (
      !receiver_name ||
      !receiver_uname ||
      !receiver_password ||
      !receiver_age ||
      !receiver_mobile ||
      !receiver_disease ||
      !receiver_doctor ||
      !receiver_organ ||
      !receiver_blood ||
      !receiver_address
    ) {
      res.send("Please enter all fields");
    } else if (
      receiver_mobile.length !== 10 ||
      !/^\d+$/.test(receiver_mobile)
    ) {
      res.send("Please enter a valid 10-digit mobile number");
    } else {
      newReceiver.save();
      res.status(201).json(newReceiver);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// recieverlogin

const receiverLogin = async (req, res) => {
  const { receiver_uname, receiver_password } = req.body;

  const user = await receiverReg.findOne({ receiver_uname: receiver_uname });
  // console.log(user);
  // validation

  if (user) {
    if (user.receiver_password === receiver_password) {
      res.json({
        message: "Receiver Login successfully",
        id: user._id,
        name: user.receiver_name,
      });
      // console.log(user._id);
    } else {
      res.json("password is incorrect");
    }
  } else {
    res.json("Receiver is not exist");
  }
};

// get donorList

const getDonors = async (req, res) => {
  const donor = await donorReg
    .find()
    .then((donors) => res.json(donors))
    .catch((err) => res.json(err));
};

// get receiverlist

const getReceivers = async (req, res) => {
  const Receiver = await receiverReg
    .find()
    .then((recievers) => res.json(recievers))
    .catch((err) => res.json(err));
};

// get user
const getSingleReceiver = async (req, res) => {
  const id = req.params.id;
  // console.log(id);

  const receiver = await receiverReg.find({ _id: id });
  try {
    res.status(201).json(receiver);
    // console.log(receiver);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// get display
const getDisplay = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const receiver = await receiverReg.find({ _id: id });
  // console.log(receiver);
  try {
    res.status(201).json(receiver);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
// edit
const getEditReceiver = async (req, res) => {
  try {
    const id = req.params.id;
    const receiver = await receiverReg.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // console.log(receiver);
    res.send(receiver);
    // console.log(receiver);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// get receiver request

const getReceiverRequest = async (req, res) => {
  const { name, choose, blood, coment, requsted_user_id } = req.body;
  // console.log(req.body);
  // console.log(requsted_user_id);
  const newRequest = new receiverRequest({
    requsted_user_id,
    name,
    choose,
    blood,
    coment,
  });
  // console.log(newRequest);
  try {
    if (!name || !choose || !blood || !coment) {
      res.send("please enter all fields");
    } else {
      newRequest.save();
      res.status(201).json(newRequest);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// single Donor
const getSingleDonor = async (req, res) => {
  const id = req.params.id;
  // console.log(id);

  const donor = await donorReg.find({ _id: id });
  try {
    res.status(201).json(donor);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
const getDonorEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const donor = await donorReg.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(donor);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// get display donor
const getDisplayDonor = async (req, res) => {
  const id = req.params.id;
  try {
    const donor = await donorReg.find({ _id: id });
    res.status(201).json(donor);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// delete donor
const removeDonor = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the donor
    const donor = await donorReg.findById(id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }

    // Delete donor
    const deleteDonor = await donorReg.deleteOne({ _id: id });

    // Delete donor from receiverRequest
    const deletedRequests = await receiverRequest.updateMany(
      { "statusUpdates.userid": id },
      { $pull: { statusUpdates: { userid: id } } }
    );

    res.status(201).json({ status: "success", deleteDonor, deletedRequests });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// delete receiver

const removReceiver = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the receiver by ID
    const receiver = await receiverReg.findById(id);

    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    // Delete the receiver
    const deletedReceiver = await receiverReg.deleteOne({ _id: id });

    // Find and delete associated requests
    const deletedRequests = await receiverRequest.deleteOne({
      requsted_user_id: id,
    });
    res
      .status(201)
      .json({ status: "success", deletedReceiver, deletedRequests });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// message store db
const getMessage = async (req, res) => {
  const { name, mobile, comment } = req.body;
  const newMessage = new message({
    name,
    mobile,
    comment,
  });
  try {
    if (!name || !mobile || !comment) {
      res.send("please enter all fields");
    } else {
      newMessage.save();
      res.status(201).json(newMessage);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// get that msg
const displayMsg = async (req, res) => {
  const messages = await message
    .find()
    .then((msg) => res.json(msg))
    .catch((err) => res.json(err));
};

// rquest is displayed for admin
const displayRequest = async (req, res) => {
  const request = await receiverRequest
    .find()
    .then((request) => res.json(request))
    .catch((err) => res.json(err));
};

const removeRequest = async (req, res) => {
  const id = req.params.id;
  const receiver = await receiverRequest.deleteOne({ _id: id });
  try {
    res.status(201).json(receiver);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// accept
const changeStatusAccept = async (req, res) => {
  const id = req.params.id;
  // console.log(`gg${id}`);
  try {
    const fullrequest = await receiverRequest.findById(id);
    console.log(fullrequest ,"mnncnd");
    // console.log("sc",req.body);
    fullrequest.statusUpdates.push(req.body);
    console.log(fullrequest);
    const updatedRequest = await fullrequest.save();
    // console.log("accept", req.body);
console.log(updatedRequest);
    if (req.body.status === "accepted") {
      res
        .status(201)
        .json({ message: "Request has been accepted", updatedRequest });
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
// rejected
const changeStatusReject = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const fullrequest = await receiverRequest.findById(id);
    fullrequest.statusUpdates.push(req.body);
    // console.log("reject", req.body);
    const updatedRequest = await fullrequest.save();
    // console.log(updatedRequest);
    if (req.body.status === "rejected") {
      res.status(201).json({ message: "Request is rejected", updatedRequest });
    }
  } catch (err) {
    // console.log("Error:", err);
    res.status(409).json({ message: err.message });
  }
};
// get request
const donorReplay = async (req, res) => {
  const { requested_user_id } = req.params;

  try {
    const rplay = await receiverRequest.find({ requested_user_id });
    if (rplay.length > 0) {
      // Filter records with status "accepted" or "rejected"
      const acceptedReplies = rplay.filter(
        (item) => item.statusUpdates[0]?.status === "accepted"
      );
      const rejectedReplies = rplay.filter(
        (item) => item.statusUpdates[0]?.status === "rejected"
      );

      res.json({ accepted: acceptedReplies, rejected: rejectedReplies });
    } else {
      res.status(404).json({ message: "No matching records found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const donorCollection = async (req, res) => {
  try {
    const donorCollections = await donorReg.find({});
    const count = donorCollections.length;
    res.json({ count });
    // console.log(donorCollections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const receiverCollection = async (req, res) => {
  try {
    const receiverCollections = await receiverReg.find({});
    const count = receiverCollections.length;
    res.json({ count });
    // console.log(receiverCollections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  createDonor,
  createReceiver,
  donorLogin,
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
  changeStatusAccept,
  changeStatusReject,
  donorReplay,
  donorCollection,
  receiverCollection,
};
