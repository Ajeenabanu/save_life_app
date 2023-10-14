import React, { useState } from "react";
import Nav from "../Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./receiver.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
        if (result.data === "Receiver Login successfully") {
          navigate("/receiver_dashboard");
          alert("Successfully logined")
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
      <Nav />

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
            <Button onClick={handleLogin} variant="secondary mt-3 ">
              Login
            </Button>{" "}
          </div>
          <div className="text-light m-3">
            Does not have an account ?{" "}
            <Link className="text-light" to="/receiver_register">
              Please click here to Register
            </Link>
          </div>
        </div>
        <p className="text-center text-danger mt-2 p-2 " id="alert"></p>
      </div>
    </div>
  );
}

export default Receiver_login;
