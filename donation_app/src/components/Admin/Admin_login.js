import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./admin.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";

function Admin_login() {
  const navigate = useNavigate();

  const [admin_name, setAdmin_name] = useState("");
  const [admin_password, setAdmin_password] = useState("");

  let adminName = "Admin";
  let adminPassword = "Admin@123";

  let handleAdmin = (e) => {
    e.preventDefault();
    if (admin_name === adminName && admin_password === adminPassword) {
      localStorage.setItem("token","zxcvbngh")
      navigate("/admin_dashboard");
    } else {
      document.getElementById("adminerror").innerHTML =
        "Please Enter correct user name and password ! ";
    }
  };

  return (
    <div className="admin-log">
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
      </Navbar>
    </Container>
  </div>
      <div className="admin_logbody">
        <div className="admin_logform">
          <h4 className="text-center text-white">Admin Login</h4>
          <FloatingLabel
            controlId="floatingInput"
            label=" User Name"
            className=" form-style mb-3"
          >
            <Form.Control
              value={admin_name}
              onChange={(e) => setAdmin_name(e.target.value)}
              className="form-style"
              type="test"
              placeholder=""
            />
          </FloatingLabel>
          <FloatingLabel
            className="form-style"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              value={admin_password}
              onChange={(e) => setAdmin_password(e.target.value)}
              className="form-style"
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <p id="adminerror"></p>
          <div className="text-center">
            {" "}
            <Button onClick={handleAdmin} variant="danger mt-3 ">
              Login
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_login;
