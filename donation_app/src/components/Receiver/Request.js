import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Request() {
  const[name,setName]=useState()
  const [choose, setChoose] = useState();
  const [blood, setBlood] = useState();
  const [coment, setComment] = useState();
  // const name=localStorage.getItem("receiver_name");
  const navigate=useNavigate()
  
  const handlerequest = (e) => {
    const requsted_user_id=localStorage.getItem("receiver_id")
    e.preventDefault();
    axios
      .post("http://localhost:3001/receiver_request" ,{
        requsted_user_id,
        name,
        choose,
        blood,
        coment,
      })
      .then((result) => {
        if (result.data === "please enter all fields") {
          alert("please enter all fields");
        } else {
          alert("Your request is send successfully");
        }
        console.log(result);
      });
  };
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/')
    }
  }, []);

  return (
    <div className="requestbody">
      <div className="requestbodycontent">
        <h3 className="text-center">Make A Request</h3>
        <div className="mb-3">
      <Form>
        <Row>
          <Col>
            <Form.Check
              type="radio"
              label="Blood"
              id="blood-radio"
              name="choose"
              value="Blood"
              checked={choose === 'Blood'}
              onChange={(e) => setChoose(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Organ"
              id="organ-radio"
              name="choose"
              value="Organ"
              checked={choose === 'Organ'}
              onChange={(e) => setChoose(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
    </div>

        <div>
          <Form.Select
            aria-label="Default select example"
            value={blood}
            onChange={(e) => {
              setBlood(e.target.value);
            }}
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
          </Form.Select>
        </div>
        <Form.Group
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label >
                FUll Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}

                />
              </Col>
            </Form.Group>
        <Form.Group
          className="mb-3 mt-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Comment here</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={coment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </Form.Group>
        <button onClick={handlerequest} className="btn btn-danger">
          Request Send
        </button>
      </div>
    </div>
  );
}

export default Request;
