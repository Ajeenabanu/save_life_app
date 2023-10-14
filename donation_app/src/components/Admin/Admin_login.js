import React, { useState } from "react";
import Nav from "../Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./admin.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Admin_login() {
  const navigate = useNavigate();

  const [admin_name, setAdmin_name] = useState("");
  const [admin_password, setAdmin_password] = useState("");

  let adminName = "Admin";
  let adminPassword = "Admin@123";

  let handleAdmin = (e) => {
    e.preventDefault();
    if (admin_name === adminName && admin_password === adminPassword) {
      navigate("/admin_dashboard");
    } else {
      document.getElementById("adminerror").innerHTML =
        "Please Enter correct user name and password ! ";
    }
  };

  return (
    <div className="admin-log">
      <Nav />

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
          <p id="adminerror" className="text-danger"></p>
          <div className="text-center">
            {" "}
            <Button onClick={handleAdmin} variant="secondary mt-3 ">
              Login
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_login;
