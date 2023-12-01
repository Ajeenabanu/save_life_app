import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./receiver.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";

function Receiver_login() {
  const [receiver_uname, setReceiver_uname] = useState("");
  const [receiver_password, setReceiver_password] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/receiver_login", {
        receiver_uname,
        receiver_password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Receiver Login successfully") {
          alert("Successfully logined");
          navigate("/receiver_Dashboard");

          localStorage.setItem("receiver_id", result.data.id);
          
          localStorage.setItem("receiver_name", result.data.name);
          localStorage.setItem("token","asdfghjkl");


        } else if (result.data === "password is incorrect") {
          document.getElementById("alert").innerHTML =
            "Please enter correct password";
        } else {
          document.getElementById("alert").innerHTML = "Receiver is not exist";
        }
      });
  };

  return (
    <div className="receiver-log">
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
      <div className="receiver_logbody">
        <div className="receiver_logform">
          <h4 className="text-center text-white">Receiver Login</h4>
          <FloatingLabel
            controlId="floatingInput"
            label=" User Name"
            className=" form-style mb-3"
          >
            <Form.Control
              value={receiver_uname}
              onChange={(e) => setReceiver_uname(e.target.value)}
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
              value={receiver_password}
              onChange={(e) => setReceiver_password(e.target.value)}
              className="form-style"
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <div className="text-center">
            {" "}
            <Button onClick={handleLogin} variant="danger mt-3 ">
              Login
            </Button>{" "}
          </div>
          <p className="text-center " id="alert"></p>

          <div className="text-light m-3">
            Does not have an account ?{" "}
            <Link className="text-light" to="/receiver_register">
              Please click here to Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receiver_login;
