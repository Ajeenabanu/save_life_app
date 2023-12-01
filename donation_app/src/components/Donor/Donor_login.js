import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./donor.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";

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
        console.log(result.data);
        if (result.data.message === "Login successfully") {
          localStorage.setItem("donor_id", result.data.id);
          localStorage.setItem("donor_blood", result.data.blood);
          localStorage.setItem("donor_name",result.data.name);
          localStorage.setItem("donor_mobile",result.data.mobile);
          localStorage.setItem("token","qwertyuiop")
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

      <div className="donor_logbody">
        <Container>
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
              <Button onClick={handleDonorLogin} variant="danger mt-3 ">
                Login
              </Button>{" "}
            </div>
            <div className="text-light m-3">
              Does not have an account ?{" "}
              <Link className="text-light" to="/donor_register">
                Please click here to Register
              </Link>
            </div>
            <p className="text-center " id="donorAlert"></p>

          </div>
        </Container>
      </div>
    </div>
  );
}

export default Donor_login;
