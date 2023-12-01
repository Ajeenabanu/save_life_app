import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";
import DonorNotification from "./DonorNotification";
import DonorProfile from "./DonorProfile";
import DonorHme from "./DonorHme";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";

function DonorDash() {
  const [home, setHome] = useState(true);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  const navigate=useNavigate()
  
  const handleDonorNotify = () => {
    setHome(false);
    setNotification(true);
    setProfile(false);
  };
  const handleDonorProfile = () => {
    setHome(false);
    setNotification(false);
    setProfile(true);
  };
  const handleDonorHome = () => {
    setHome(true);
    setNotification(false);
    setProfile(false);
  };
  const handleLogOut=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("donor_id");
    localStorage.removeItem("donor_blood");
    localStorage.removeItem("donor_name");
    localStorage.removeItem("donor_mobile");

    alert("you are Loggedout please Login")
    navigate('/')

  }
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate('/')
    }
  })
  return (
    <div>
      <div className="navshadow">
        <Container>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <div className="col-6">
              <Navbar.Brand href="" className="toggleimg">
                <img
                  alt="no images"
                  src={logo}
                  className="d-inline-block align-top "
                />{" "}
              </Navbar.Brand>
            </div>
            <div className="col-6">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="navlist">
                  <Nav.Link onClick={handleDonorHome} className="text-dark">
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={handleDonorNotify} className="text-dark">
                    Notifications <i class="fa-regular fa-bell"></i>
                  </Nav.Link>
                  <Nav.Link onClick={handleDonorProfile} className="text-dark">
                    Profile <i class="fa-regular fa-user"></i>
                  </Nav.Link>
                  <Nav.Link  className="text-dark" onClick={handleLogOut}>
                  <i class="fa-solid fa-right-from-bracket"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </Container>
      </div>
      <div className="DonDash">
        {notification ? (
          <DonorNotification />
        ) : profile ? (
          <DonorProfile />
        ) : (
          <DonorHme />
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default DonorDash;
