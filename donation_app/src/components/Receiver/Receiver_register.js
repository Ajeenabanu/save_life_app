import React, { useState } from "react";
import "./receiver.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Receiver_register() {
  let navigate = useNavigate();

  const [receiver_name, setReceiver_name] = useState("");
  const [receiver_uname, setReceiver_uname] = useState("");
  const [receiver_password, setReceiver_password] = useState("");
  const [receiver_age, setReceiver_age] = useState();
  const [receiver_mobile, setReceiver_mobile] = useState();
  const [receiver_disease, setReceiver_disease] = useState("");
  const [receiver_doctor, setReceiver_doctor] = useState("");
  const [receiver_organ, setReceiver_organ] = useState("");
  const [receiver_blood, setReceiver_blood] = useState("");
  const [receiver_address, setReceiver_address] = useState("");

  const receiverRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/receiver_register", {
        receiver_name,
        receiver_uname,
        receiver_password,
        receiver_age,
        receiver_mobile,
        receiver_disease,
        receiver_doctor,
        receiver_organ,
        receiver_blood,
        receiver_address,
      })
      .then((result) => {
        if (result.data === "please enter all fields") {
          alert("please enter all fields");
        } else {
          navigate("/receiver_login");
          alert("Successfully Registered");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="receiver_reg">
      <Nav />

      <div className="receiver_regbody">
        <h3 className="text-center text-white">Receiver Register</h3>
        <div className="receiver_form">
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
                  value={receiver_name}
                  onChange={(e) => setReceiver_name(e.target.value)}
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
                  value={receiver_uname}
                  onChange={(e) => setReceiver_uname(e.target.value)}
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
                  value={receiver_password}
                  onChange={(e) => setReceiver_password(e.target.value)}
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
                  value={receiver_age}
                  onChange={(e) => setReceiver_age(e.target.value)}
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
                  value={receiver_mobile}
                  onChange={(e) => setReceiver_mobile(e.target.value)}
                  type="text"
                  placeholder="Mobile"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Disease
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={receiver_disease}
                  onChange={(e) => setReceiver_disease(e.target.value)}
                  type="text"
                  placeholder="disease"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Doctor Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  value={receiver_doctor}
                  onChange={(e) => setReceiver_doctor(e.target.value)}
                  type="text"
                  placeholder="name"
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
                  value={receiver_organ}
                  onChange={(e) => setReceiver_organ(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>select Organ</option>
                  <option value="Kidney">Kidney</option>
                  <option value="Eye">Eye</option>
                  <option value="Liver">Liver</option>
                  <option value="Lung">Lung</option>
                  <option value="Other">Other</option>
                  <option value="none">None</option>
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
                  value={receiver_blood}
                  onChange={(e) => setReceiver_blood(e.target.value)}
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
                  <option value="none">none</option>
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
                  value={receiver_address}
                  onChange={(e) => setReceiver_address(e.target.value)}
                  type="text"
                  placeholder="Address"
                />
              </Col>
            </Form.Group>
            <div className="text-center">
              {" "}
              <Button onClick={receiverRegister} variant="primary mt-3 ">
                Register
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Receiver_register;
