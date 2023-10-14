import React, { useState } from "react";
import Nav from "../Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./donor.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Donor_login() {
  const [donor_uname, setDonor_uname] = useState("");
  const [donor_password, setDonor_password] = useState("");

  const navigate = useNavigate();

  const handleDonorLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/donor_login", {
        donor_uname,
        donor_password,
      })
      .then((result) => {
        if (result.data === "Login successfully") {
          navigate("/donor_dashboard");
          alert("Successfully logined");
        } else if (result.data === "password is incorrect") {
          document.getElementById("donorAlert").innerHTML =
            "Please enter correct password";
        } else {
          document.getElementById("donorAlert").innerHTML =
            "Donor is not exist";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="donor-log">
      <Nav />
      <div className="donor_logbody">
        <div className="donor_logform">
          <h4 className="text-center text-white">Donor Login</h4>
          <FloatingLabel
            controlId="floatingInput"
            label=" User Name"
            className=" form-style mb-3"
          >
            <Form.Control
              value={donor_uname}
              onChange={(e) => setDonor_uname(e.target.value)}
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
              value={donor_password}
              onChange={(e) => setDonor_password(e.target.value)}
              className="form-style"
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <div className="text-center">
            {" "}
            <Button onClick={handleDonorLogin} variant="secondary mt-3 ">
              Login
            </Button>{" "}
          </div>
          <div className="text-light m-3">
            Does not have an account ?{" "}
            <Link className="text-light" to="/donor_register">
              Please click here to Register
            </Link>
          </div>
        </div>
        <p className="text-center text-danger mt-2 p-2 " id="donorAlert"></p>
      </div>
    </div>
  );
}

export default Donor_login;
