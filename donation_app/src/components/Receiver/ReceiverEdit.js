import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import user from "../Home/imges/user (2).png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ReceiverEdit() {
  let { id } = useParams();
  const [receiver_name, setReceiver_name] = useState("");
  const [receiver_uname, setReceiver_uname] = useState("");
  const [receiver_age, setReceiver_age] = useState();
  const [receiver_mobile, setReceiver_mobile] = useState();
  const [receiver_disease, setReceiver_disease] = useState("");
  const [receiver_doctor, setReceiver_doctor] = useState("Dr.");
  const [receiver_organ, setReceiver_organ] = useState("");
  const [receiver_blood, setReceiver_blood] = useState("");
  const [receiver_address, setReceiver_address] = useState("");

  // close btn

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/receiver_Dashboard");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const isValidMobile = /^\d{10}$/.test(receiver_mobile);

    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    axios
      .patch("http://localhost:3001/receiver_edit/" + id, {
        receiver_name,
        receiver_uname,
        receiver_age,
        receiver_mobile,
        receiver_disease,
        receiver_doctor,
        receiver_organ,
        receiver_blood,
        receiver_address,
      })
      .then((result) => {
        console.log( result)
        setReceiver_name(result.data.receiver_name);
        setReceiver_uname(result.data.receiver_uname);
        setReceiver_age(result.data.receiver_age);
        setReceiver_mobile(result.data.receiver_mobile);
        setReceiver_disease(result.data.receiver_disease);
        setReceiver_doctor(result.data.receiver_doctor);
        setReceiver_organ(result.data.receiver_organ);
        setReceiver_blood(result.data.receiver_blood);
        setReceiver_address(result.data.receiver_address);
        alert("data updated successfully")
      });
  };
  const fetchreceiver = async () => {
    const id = localStorage.getItem("receiver_id");
    const result = await axios.get(
      "http://localhost:3001/single_receiver/" + id
    );
    setReceiver_name(result.data[0].receiver_name);
    setReceiver_uname(result.data[0].receiver_uname);
    setReceiver_age(result.data[0].receiver_age);
    setReceiver_mobile(result.data[0].receiver_mobile);
    setReceiver_disease(result.data[0].receiver_disease);
    setReceiver_doctor(result.data[0].receiver_doctor);
    setReceiver_organ(result.data[0].receiver_organ);
    setReceiver_blood(result.data[0].receiver_blood);
    setReceiver_address(result.data[0].receiver_address);
  };
  useEffect(() => {
    fetchreceiver();
    if(!localStorage.getItem("token")){
      navigate('/')
    }

  },[]);
  return (
    <div>
      <div className="receiverProfile">
        <div className="receiverProfileBody">
          <Container>
            <Row>
              <Col xs={12} md={6} className="">
                <h3 className="mb-3">{` ${receiver_name} You can edit your data here`}</h3>
                <img src={user} alt="img"></img>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>User Name {receiver_name}</Form.Label>
                  <Form.Control
                    type="text"
                    className="inputcolor"
                    value={receiver_uname}
                    onChange={(e) => setReceiver_uname(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    className="inputcolor"
                    value={receiver_mobile}
                    onChange={(e) => {
                      setReceiver_mobile(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} className="">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      className="inputcolor"
                      type="text"
                      value={receiver_age}
                      onChange={(e) => {
                        setReceiver_age(e.target.value);
                      }}
                    />
                  </Form.Group>
                 
                  <Form.Group
              className="mb-3"
              controlId="formHorizontalPassword"
            >
            <Form.Label>Organ</Form.Label>
            <Col>
                <Form.Select
                  value={receiver_organ}
                  onChange={(e) => setReceiver_organ(e.target.value)}
                  aria-label="Default select example"
                  className="inputcolor"

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
            
              className="mb-3"
              controlId="formHorizontalEmail"
              
            >
            <Form.Label>Blood Group</Form.Label>
            <Col >
                <Form.Select
                  value={receiver_blood}
                  onChange={(e) => setReceiver_blood(e.target.value)}
                  aria-label="Default select example"
                  className="inputcolor"

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
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Disease</Form.Label>
                    <Form.Control
                      type="text"
                      className="inputcolor"
                      value={receiver_disease}
                      onChange={(e) => {
                        setReceiver_disease(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Doctor</Form.Label>
                    <Form.Control
                      type="text"
                      className="inputcolor"
                      value={receiver_doctor}
                      onChange={(e) => {
                        setReceiver_doctor(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label> Address</Form.Label>
                    <Form.Control
                      className="inputcolor"
                      type="text"
                      value={receiver_address}
                      onChange={(e) => {
                        setReceiver_address(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      handleEdit(e);
                    }}
                  >
                    Save Changes{" "}
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-3 "
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ReceiverEdit;
