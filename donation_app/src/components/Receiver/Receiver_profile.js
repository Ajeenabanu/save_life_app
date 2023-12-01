import React, { useEffect, useState } from "react";
import "./receiver.css";
import user from "../Home/imges/user (2).png";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [receiver_name, setReceiver_name] = useState("");
  const [receiver_uname, setReceiver_uname] = useState("");
  const [receiver_age, setReceiver_age] = useState();
  const [receiver_mobile, setReceiver_mobile] = useState();
  const [receiver_disease, setReceiver_disease] = useState("");
  const [receiver_doctor, setReceiver_doctor] = useState("Dr.");
  const [receiver_organ, setReceiver_organ] = useState("");
  const [receiver_blood, setReceiver_blood] = useState("");
  const [receiver_address, setReceiver_address] = useState("");
  const id = localStorage.getItem("receiver_id");

const navigate=useNavigate()

  const fetchreceiver = async () => {
    const id = localStorage.getItem("receiver_id");
    const result = await axios.get(
      "http://localhost:3001/single_receiver/" + id
    );
    setReceiver_name(result.data[0].receiver_name);
    setReceiver_uname(result.data[0].receiver_uname);
    setReceiver_age(result.data[0].receiver_age);
    setReceiver_mobile(result.data[0].receiver_mobile);
    setReceiver_disease(result.data[0].receiver_disease);
    setReceiver_doctor(result.data[0].receiver_doctor);
    setReceiver_organ(result.data[0].receiver_organ);
    setReceiver_blood(result.data[0].receiver_blood);
    setReceiver_address(result.data[0].receiver_address);
  };

  useEffect(() => {
    fetchreceiver();
    if(!localStorage.getItem("token")){
      navigate('/')
    }

  }, []);

  return (
    <div className="receiveredit">
      <div className="receivereditbody">
      <h5>{`Welcome ${receiver_name}`}</h5>
        <img src={user} alt="img"></img>
        <ListGroup>
          <ListGroup.Item>{`User Name : ${receiver_uname}`}</ListGroup.Item>
          <ListGroup.Item>{`Age : ${receiver_age}`}</ListGroup.Item>
          <ListGroup.Item>{`Contact : ${receiver_mobile}`}</ListGroup.Item>
          <ListGroup.Item>{`Disease : ${receiver_disease}`}</ListGroup.Item>
          <ListGroup.Item>{` ${receiver_doctor}`}</ListGroup.Item>
          <ListGroup.Item>{` Organ : ${receiver_organ}`}</ListGroup.Item>
          <ListGroup.Item>{`Your Blood Group is ${receiver_blood}`}</ListGroup.Item>
          <ListGroup.Item>{`Address : ${receiver_address}`}</ListGroup.Item>

          <button
            onClick={(EditBtn) => (window.location = `/receiver_edit/${id}`)}
            className="btn btn-danger"
          >
            Edit
          </button>
        </ListGroup>
      </div>
    </div>
  );
}

export default ProfilePage;
