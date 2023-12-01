import React, { useState, useEffect } from "react";
import "./receiver.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";
import ReceiverHome from "./ReceiverHome";
import ReceiverProfile from "./Receiver_profile";
import Request from "./Request";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import user from "../Home/imges/user (2).png";
import axios from "axios";

function RecieverDash() {
  const [home, setHome] = useState(true);
  const [request, setRequeste] = useState(false);
  const [profile, setProfile] = useState(false);
  const [show, setShow] = useState(false);
  const [replay, setReplay] = useState([]);

  const navigate = useNavigate();

  const handleShow = () => {
    setShow(true);
    // Call the function to mark notifications as read here, if needed
  };

  const handleClose = () => setShow(false);

  // Function to toggle the visibility of a notification
  const toggleNotification = (index) => {
    const updatedReplay = [...replay];
    updatedReplay[index].hidden = true;
    setReplay(updatedReplay);
  };

  const handleReceiverRequest = () => {
    setHome(false);
    setRequeste(true);
    setProfile(false);
  };

  const handleReceiverHome = () => {
    setHome(true);
    setRequeste(false);
    setProfile(false);
  };

  const handleReceiverProfile = () => {
    setHome(false);
    setRequeste(false);
    setProfile(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("receiver_id");
    localStorage.removeItem("receiver_name");

    alert("You are logged out, please login");
    navigate("/");
  };

  const getRepaly = () => {
    const requsted_user_id = localStorage.getItem("receiver_id");
    axios
      .get(`http://localhost:3001/donor_replay/${requsted_user_id}`)
      .then((replay) => {
        const allReplies = [];
        if (replay.data.accepted.length > 0) {
          const acceptedReplies = replay.data.accepted.map((item) => {
            return {
              status: item.statusUpdates[0].status,
              name: item.statusUpdates[0].name,
              mobile:item.statusUpdates[0].mobile,
              hidden: false,
            };
          });
          allReplies.push(...acceptedReplies);
        }
        if (replay.data.rejected.length > 0) {
          const rejectedReplies = replay.data.rejected.map((item) => {
            return {
              status: item.statusUpdates[0].status,
              name: item.statusUpdates[0].name,
              mobile:item.statusUpdates[0].mobile,
              hidden: false,
            };
          });
          allReplies.push(...rejectedReplies);
        }
        setReplay(allReplies);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRepaly();
    if(!localStorage.getItem("token")){
      navigate('/')
    }

  }, []);

  return (
    <div>
      <div className="navshadow">
        <Container>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <div className="col-4">
              <Navbar.Brand href="" className="toggleimg">
                <img
                  alt="no images"
                  src={logo}
                  className="d-inline-block align-top "
                />{" "}
              </Navbar.Brand>
            </div>
            <div className="col-8">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="navlist">
                  <Nav.Link onClick={handleReceiverHome} className="text-dark">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={handleReceiverRequest}
                    className="text-dark"
                  >
                    Request
                  </Nav.Link>
                  <Nav.Link
                    onClick={handleReceiverProfile}
                    className="text-dark"
                  >
                    Profile <i class="fa-regular fa-user"></i>
                  </Nav.Link>
                  <Nav.Link onClick={handleShow} className="text-dark">
                    Notifications <i className="fa-solid fa-bell"></i>
                  </Nav.Link>
                  <Nav.Link onClick={handleLogOut} className="text-dark">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </Container>
      </div>
      <div className="modal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <div className="notify">
            {replay.map((rply, index) => (
              rply.hidden ? null : (
                <div className="Notificationbody " key={index}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img className="userimg" src={user} alt="img" />
                    <div className="ms-3">
                      <h5>
                        {" "}
                        Your request has been {rply.status} by {rply.name} and you can contact {rply.name} using this number {rply.mobile} .
                      </h5>
                    </div>
                  </div>
                  <button onClick={() => toggleNotification(index)}>X</button>
                </div>
              )
            ))}
          </div>
        </Modal>
      </div>
      <div className="recdash">
        {profile ? (
          <ReceiverProfile />
        ) : request ? (
          <Request />
        ) : (
          <ReceiverHome />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default RecieverDash;
