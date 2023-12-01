import React, { useState } from "react";
import "./donor.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";

function Donor_register() {
  const [donor_name, setDonor_name] = useState("");
  const [donor_uname, setDonor_uname] = useState("");
  const [donor_password, setDonor_password] = useState("");
  const [donor_age, setDonor_age] = useState();
  const [donor_mobile, setDonor_mobile] = useState();
  const [donor_organ, setDonor_organ] = useState("");
  const [donor_blood, setDonor_blood] = useState("");
  const [donor_address, setDonor_address] = useState("");

  const navigate = useNavigate();

  // submit
  const donorRegister = (e) => {
    e.preventDefault();
    const isValidMobile = /^\d{10}$/.test(donor_mobile);

    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    axios
      .post("http://localhost:3001/donor_register", {
        donor_name: donor_name,
        donor_uname: donor_uname,
        donor_password: donor_password,
        donor_age: donor_age,
        donor_mobile: donor_mobile,
        donor_organ: donor_organ,
        donor_blood: donor_blood,
        donor_address: donor_address,
      })

      .then((result) => {
        if (result.data === "please enter all fields") {
          alert("please enter all fields");
        } else {
          navigate("/donor_login");
          alert("Successfully Registered");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="donor_reg">
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
      </div>{" "}
      <div className="donor_regbody">
        <div className="donor_form">
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                FUll Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={donor_name}
                  onChange={(e) => setDonor_name(e.target.value)}
                  type="text"
                  placeholder="name"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                User Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={donor_uname}
                  onChange={(e) => setDonor_uname(e.target.value)}
                  type="text"
                  placeholder="user name"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={donor_password}
                  onChange={(e) => setDonor_password(e.target.value)}
                  type="password"
                  placeholder="password"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Age
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={donor_age}
                  onChange={(e) => setDonor_age(e.target.value)}
                  type="text"
                  placeholder="age"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Mobile
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={donor_mobile}
                  onChange={(e) => setDonor_mobile(e.target.value)}
                  type="text"
                  placeholder="Mobile"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Select Organ
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  value={donor_organ}
                  onChange={(e) => setDonor_organ(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Organ</option>
                  <option value="Kidney">Kidney</option>
                  <option value="Eye">Eye</option>
                  <option value="Liver">Liver</option>
                  <option value="Lung">Lung</option>
                  <option value="None">None</option>
                  <option value="Other">Other</option>
                </Form.Select>{" "}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Blood Group
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  value={donor_blood}
                  onChange={(e) => setDonor_blood(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="None">None</option>
                </Form.Select>{" "}
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Address
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={donor_address}
                  onChange={(e) => setDonor_address(e.target.value)}
                  type="text"
                  placeholder="Address"
                />
              </Col>
            </Form.Group>
            <div className="text-center">
              {" "}
              <Button onClick={donorRegister} variant="danger">
                Register
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Donor_register;
