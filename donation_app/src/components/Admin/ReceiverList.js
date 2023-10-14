import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReceiverList() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/admin_dashboard");
  }

  const [receivers, setReceivers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/receiver_list")
      .then((receivers) => setReceivers(receivers.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(receivers);

  return (
    <div className="list">
      <div className="p-5">
        <h3 className="text-center ">Receiver List</h3>
        {receivers.map((user) => {
          return (
            <div className="donordetails">
              <div>Receiver Name : {user.receiver_name} </div>
              <div>Receiver Age : {user.receiver_age}</div>
              <div>Receiver mobile : {user.receiver_mobile}</div>
              <div>Receiver Disease : {user.receiver_disease}</div>
              <div>Receiver Doctor : {user.receiver_doctor}</div>
              <div>Receiver Organ : {user.receiver_organ}</div>
              <div>Receiver Blood Group : {user.receiver_blood}</div>
              <div>Receiver Address : {user.receiver_address}</div>
              <button type="submit" class="btn btn-danger ">
                Remove
              </button>
              <button type="submit" class="btn btn-success ms-5">
                Edit
              </button>
              <button
                onClick={handleSubmit}
                type="submit"
                class=" btn btn-primary ms-5"
              >
                Back
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReceiverList;
