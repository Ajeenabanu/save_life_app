import React, { useState, useEffect } from "react";
import user from "../Home/imges/user (2).png";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DonorProfile() {
  const [donor_name, setDonor_name] = useState("");
  const [donor_uname, setDonor_uname] = useState("");
  const [donor_age, setDonor_age] = useState();
  const [donor_mobile, setDonor_mobile] = useState();
  const [donor_organ, setDonor_organ] = useState("");
  const [donor_blood, setDonor_blood] = useState("");
  const [donor_address, setDonor_address] = useState("");

  const id = localStorage.getItem("donor_id");
  console.log(id);

  const navigate=useNavigate()

  const fetchdonor = async () => {
    const id = localStorage.getItem("donor_id");
    const result = await axios.get("http://localhost:3001/donor_edit/"+id);
    setDonor_name(result.data[0].donor_name);
    setDonor_uname(result.data[0].donor_uname);
    setDonor_age(result.data[0].donor_age);
    setDonor_mobile(result.data[0].donor_mobile);
    setDonor_organ(result.data[0].donor_organ);
    setDonor_blood(result.data[0].donor_blood);
    setDonor_address(result.data[0].donor_address);
  };
  console.log(fetchdonor());
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/')
    }
    fetchdonor();
  }, []);

  return (
    <div>
      <div className="receiveredit">
        <div className="receivereditbody">
          <h5>{`Welcome ${donor_name}`}</h5>
          <img src={user} alt="img"></img>
          <ListGroup>
            <ListGroup.Item>{`User Name : ${donor_uname}`}</ListGroup.Item>
            <ListGroup.Item>{`Age : ${donor_age}`}</ListGroup.Item>
            <ListGroup.Item>{`Contact : ${donor_mobile}`}</ListGroup.Item>
            <ListGroup.Item>{` Organ : ${donor_organ}`}</ListGroup.Item>
            <ListGroup.Item>{`Your Blood Group is ${donor_blood}`}</ListGroup.Item>
            <ListGroup.Item>{`Address : ${donor_address}`}</ListGroup.Item>

            <button
              onClick={(EditBtn) => (window.location = `/donor_edit/${id}`)}
              className="btn btn-danger"
            >
              Edit
            </button>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default DonorProfile;
