const express = require("express");
const router = express.Router();

// model
const donorReg = require("../models/donor");
const receiverReg = require("../models/receiver");
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
  console.log(donor_uname);
  const user = await donorReg.findOne({ donor_uname: donor_uname });
  if (user) {
    if (user.donor_password === donor_password) {
      res.json("Login successfully");
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
      res.send("please enter all fields");
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

  if (user) {
    if (user.receiver_password === receiver_password) {
      res.json("Receiver Login successfully");
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

const getReceivers = async (req, res) => {
  const Receiver = await receiverReg
    .find()
    .then((recievers) => res.json(recievers))
    .catch((err) => res.json(err));
};

module.exports = {
  createDonor,
  donorLogin,
  createReceiver,
  receiverLogin,
  getDonors,
  getReceivers
};
