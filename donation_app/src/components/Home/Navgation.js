import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./imges/logo.png";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Navgation() {
  const navigate = useNavigate();

  let donorLogin = () => {
    navigate("/donor_login");
  };

  let receiverLogin = () => {
    navigate("/receiver_login");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navshadow">
      <Container>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <div className="col-9">
            <Navbar.Brand href="/" className="toggleimg">
              <img
                alt="no images"
                src={logo}
                className="d-inline-block align-top "
              />{" "}
            </Navbar.Brand>
          </div>
          <div className="col-2">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="navlist">
                <Nav.Link href="#about " className="text-dark">
                  About{" "}
                </Nav.Link>
                <Nav.Link href="#contact" className="text-dark me-3">
                  Contact{" "}
                </Nav.Link>

                <button onClick={handleShow} className="loginbtn ps-3 pe-3">
                  {" "}
                  Login{" "}
                </button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className="modal">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <button onClick={donorLogin} className="logbtn">
              <i class="fa-solid fa-user"></i> Donor{" "}
            </button>
            <button onClick={receiverLogin} className="logbtn">
              <i class="fa-solid fa-user"></i> Receiver{" "}
            </button>
          </Modal>
        </div>
      </Container>
    </div>
  );
}

export default Navgation;
