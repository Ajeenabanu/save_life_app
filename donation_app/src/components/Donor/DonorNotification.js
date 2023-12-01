import React, { useState, useEffect } from "react";
import "./donor.css";
import axios from "axios";
import user from "../Home/imges/user (2).png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function DonorNotification() {
  const [requests, setRequests] = useState([]);

  const getUser = () => {
    axios
      .get("http://localhost:3001/display_request")
      .then((response) => {
        const activeUser = localStorage.getItem("donor_id");
        const activeUserBlood = localStorage.getItem("donor_blood");
        let filteredNotifications = response.data.filter((element) => {
          var flag = true;
          console.log(element);
          for (var i in element.statusUpdates) {
            console.log(element.statusUpdates[i].userid);
            console.log(activeUser);
            if (element.statusUpdates[i].userid === activeUser) {
              flag = false;
            }
          }
          return element.blood === activeUserBlood && flag;
        });
        console.log(filteredNotifications);
        setRequests(filteredNotifications);
      })
      .catch((err) => console.log(err));
  };

  // accept request
  const acceptRequest = (request_id) => {
    const name = localStorage.getItem("donor_name");
    const status = "accepted";
    const userid = localStorage.getItem("donor_id");
    const mobile = localStorage.getItem('donor_mobile')
    console.log(mobile);
    axios
      .patch(`http://localhost:3001/change_status_accept/${request_id}`, {
        name,
        status,
        userid,
        mobile
      })
      .then((response) => {
        console.log(response);
        if (response.data.message === "Request has been accepted") {
          alert("Request has been accepted");
          getUser();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // regect request
  const rejectRequest = (request_id) => {
    const name = localStorage.getItem("donor_name");
    const status = "rejected";
    const userid = localStorage.getItem("donor_id");
    console.log(name);
    axios
      .patch(`http://localhost:3001/change_status_reject/${request_id}`, {
        name,
        status,
        userid,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message === "Request is rejected") {
          alert("Request rejected");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    getUser();
  }, []);

  return (
    <div className="donorNotification">
      {requests.map((alert, index) => (
        <div
          className={`Notificationbody ${
            requests.includes(alert._id) ? "hidden" : ""
          }`}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="userimg" src={user} alt="img" />
            <div className="ms-3 p-1">
              <h5>
                {alert.name} has been requested for a {alert.choose} donation,
                and their blood group is {alert.blood}.
              </h5>
              <p>{alert.coment}</p>
            </div>
          </div>
          <Button
            onClick={() => acceptRequest(alert._id)}
            variant="success"
            className="m-2"
            type="button"
          >
            Accept<i class="fa-solid fa-check"></i>
          </Button>
          <Button
            onClick={() => rejectRequest(alert._id)}
            variant="danger"
            type="button"
          >
            Reject<i class="fa-solid fa-xmark"></i>
          </Button>
        </div>
      ))}
    </div>
  );
}

export default DonorNotification;
