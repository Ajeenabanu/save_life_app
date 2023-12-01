import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import user from "../Home/imges/user (2).png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Donor_Edit() {
  let { id } = useParams();

  const [donor_name, setDonor_name] = useState("");
  const [donor_uname, setDonor_uname] = useState("");
  const [donor_age, setDonor_age] = useState();
  const [donor_mobile, setDonor_mobile] = useState();
  const [donor_organ, setDonor_organ] = useState("");
  const [donor_blood, setDonor_blood] = useState("");
  const [donor_address, setDonor_address] = useState("");

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/donor_Dashboard");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const isValidMobile = /^\d{10}$/.test(donor_mobile);

    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    axios
      .patch("http://localhost:3001/donor_edit/" + id, {
        donor_name,
        donor_uname,
        donor_age,
        donor_mobile,
        donor_address,
        donor_blood,
        donor_organ,
      })
      .then((result) => {
        setDonor_name(result.data.donor_name);
        setDonor_uname(result.data.donor_uname);
        setDonor_age(result.data.donor_age);
        setDonor_mobile(result.data.donor_mobile);
        setDonor_organ(result.data.donor_organ);
        setDonor_blood(result.data.donor_blood);
        setDonor_address(result.data.donor_address);
        alert("successfully updated");
      });
  };
  const fetchDonor = async () => {
    const id = localStorage.getItem("donor_id");
  
    try {
      const result = await axios.get("http://localhost:3001/single_donor/" + id);
  
      if (result.data && result.data.length > 0) {
        setDonor_name(result.data[0].donor_name);
        setDonor_uname(result.data[0].donor_uname);
        setDonor_age(result.data[0].donor_age);
        setDonor_mobile(result.data[0].donor_mobile);
        setDonor_organ(result.data[0].donor_organ);
        setDonor_blood(result.data[0].donor_blood);
        setDonor_address(result.data[0].donor_address);
      } else {
        console.error("Error fetching donor data: No data or invalid format");
      }
    } catch (error) {
      console.error("Error fetching donor data:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };
      useEffect(() => {
    fetchDonor();
    if (!localStorage.getItem("token")) {
      navigate('/');
    }
  }, []);
  return (
    <div className="donor_edit">
      <div className="donor_edit_body">
        <Container>
          <Row>
            <Col xs={12} md={6} className="">
              <h3 className="mb-3">{`${donor_name}you can edit your details`}</h3>
              <img src={user} alt="img"></img>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User Name {donor_uname} </Form.Label>
                <Form.Control
                  type="text"
                  className="inputcolor"
                  value={donor_uname}
                  onChange={(e) => setDonor_uname(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Age </Form.Label>
                <Form.Control
                  className="inputcolor"
                  type="text"
                  value={donor_age}
                  onChange={(e) => setDonor_age(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} className="">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>your blood Group is </Form.Label>
                  <Form.Control
                    className="inputcolor"
                    type="text"
                    value={donor_blood}
                    onChange={(e) => setDonor_blood(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> Organ</Form.Label>
                  <Form.Control
                    type="text"
                    className="inputcolor"
                    value={donor_organ}
                    onChange={(e) => setDonor_organ(e.target.value)}
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
                    value={donor_mobile}
                    onChange={(e) => setDonor_mobile(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label> Address </Form.Label>
                  <Form.Control
                    className="inputcolor"
                    type="text"
                    value={donor_address}
                    onChange={(e) => setDonor_address(e.target.value)}
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
  );
}

export default Donor_Edit;
