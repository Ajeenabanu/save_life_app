import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import logo from "../Home/imges/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CardBody } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import user from "../Home/imges/user (2).png";

function AdminDashboard() {
  const [donors, setDonors] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [donorCount, setDonorCount] = useState(0);
  const [receiverCount, setReceiverCount] = useState(0);
  const [show, setShow] = useState(false);
  const [usermsg, setUsermsg] = useState([]);
  const [view, setView] = useState(false);

  const [requests, setRequest] = useState([]);
  
  const navigate=useNavigate()
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleView = () => setView(true);
  const handleHide = () => setView(false);

  console.log("hi", usermsg);
  const getUsermsg = () =>
    axios
      .get("http://localhost:3001/get_message")
      .then((response) => setUsermsg(response.data))
      .catch((err) => console.log(err));
  console.log("hwelo", usermsg);

  const getUsers = () => {
    axios
      .get("http://localhost:3001/receiver_list")
      .then((receivers) => setReceivers(receivers.data))
      .catch((err) => console.log(err));
  };
  const getUser = () =>
    axios
      .get("http://localhost:3001/donor_list")
      .then((response) => setDonors(response.data))
      .catch((err) => console.log(err));

  const getRequest = () =>
    axios
      .get("http://localhost:3001/display_request")
      .then((response) => setRequest(response.data))
      .catch((err) => console.log(err))

  // Function to hide the content
  const hideContent = (index) => {
    // Toggle the visibility of content elements using a CSS class
    const contentElements = document.querySelectorAll(".content-item");
    contentElements[index].classList.add("hidden-content");
  };

 
    const donorCollectionCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/donor_collection'); // Replace with your backend URL
        setDonorCount(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const receiverCollectionCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/receiver_collection'); // Replace with your backend URL
        setReceiverCount(response.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(() => {
    getUser();
    getUsers();
    getUsermsg();
    getRequest();
    donorCollectionCount();
    receiverCollectionCount();
    if(!localStorage.getItem("token")){
      navigate('/admin_login')
    }
  }, []);

  return (
    <div>
      <div className="navshadow">
        <Container>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Col md={6}>
              <Navbar.Brand href="" className="navimgdash">
                <img
                  alt="no images"
                  src={logo}
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </Col>
            <Col md={6}></Col>
          </Navbar>
        </Container>
      </div>

      <div className="admin-dashboard">
        <Col md={4} className="col-3 sidebar" id="sidebar">
          <Nav className="flex-column">
            <Link to="/donor_list" className="nav-link">
              <i className="fa-solid fa-user"></i>
              Donor
            </Link>
            <Link to="/receiver_list" className="nav-link">
              <i className="fa-solid fa-user"></i>
              Receiver
            </Link>
            <Link onClick={handleShow} className="nav-link">
              <i className="fa-solid fa-bell"></i>
              Notifications
            </Link>
            <Link onClick={handleView} className="nav-link">
              <i class="fa-solid fa-inbox"></i>
              Requests
            </Link>
            <Link to="" className="nav-link">
              <i class="fa-solid fa-gear"></i>
              Settings
            </Link>
            <Link to="/" className="nav-link">
              <i class="fa-solid fa-right-from-bracket"></i> Logout
            </Link>
          </Nav>
        </Col>
        <div className="modal">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <div className="notify">
              {usermsg.map((msg, index) => (
                <div className="Notificationbody content-item">
                  {" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img className="userimg" src={user} alt="img" />
                    <div className="ms-3">
                      <h5>{msg.name} is messaged for connect</h5>
                      <p>{msg.comment}</p>
                    </div>
                  </div>
                  <button onClick={() => hideContent(index)}>X</button>
                </div>
              ))}
            </div>
          </Modal>
        </div>
        <div className="modal">
          <Modal show={view} onHide={handleHide}>
            <Modal.Header closeButton></Modal.Header>
            <div className="notify">
              {requests.map((request, index) => (
                <div className="Notificationbody content-item">
                  {" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img className="userimg" src={user} alt="img" />
                    <div className="ms-3">
                      <h5>
                        {request.name} is requested
                        <span>
                          {" "}
                          for {request.choose} and their blood group is{" "}
                          {request.blood}{" "}
                        </span>
                      </h5>
                      <p>{request.coment}</p>
                    </div>
                  </div>
                  <button onClick={() => hideContent(index)}>X</button>
                </div>
              ))}
            </div>
          </Modal>
        </div>
        <Col md={8} className="col-6 admin-content">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <Container>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Body>
                          <img
                            src="https://cdn0.iconfinder.com/data/icons/super-mono-reflection/red/user_red.png"
                            alt="img"
                          ></img>
                          <span>
                            Joined Donors{" "}
                            <span className="fs-1 ms-2">{donorCount}</span>{" "}
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>{" "}
              </Col>
              <Col xs={12} md={6}>
                <Container>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Body>
                          <img
                            src="https://cdn0.iconfinder.com/data/icons/super-mono-reflection/red/user_red.png"
                            alt="img"
                          ></img>
                          <span>
                            Joined Receivers{" "}
                            <span className="fs-1 ms-2">{receiverCount}</span>
                          </span>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
          <div className="pt-5">
            <Container>
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <div className=" ">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Donor Name</th>
                              <th>Donor Age</th>
                              <th>Donor Organ</th>
                              <th>Donor Blood Group</th>
                            </tr>
                          </thead>
                          <tbody>
                            {donors.map((donor, index) => (
                              <tr key={index}>
                                <td>{donor.donor_name}</td>
                                <td>{donor.donor_age}</td>
                                <td>{donor.donor_organ}</td>
                                <td>{donor.donor_blood}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>{" "}
          </div>
          <div className="pt-5">
            <Container>
              <Row>
                <Col>
                  <Card>
                    <CardBody></CardBody>
                    <div>
                      <container>
                        <table className="table table-bordered ">
                          <thead>
                            <tr>
                              <th>Receiver Name</th>
                              <th>Receiver Age</th>
                              <th>Receiver Organ</th>
                              <th>Receiver Blood Group</th>
                            </tr>
                          </thead>
                          <tbody>
                            {receivers.map((receivers, index) => (
                              <tr key={index}>
                                <td>{receivers.receiver_name}</td>
                                <td>{receivers.receiver_age}</td>
                                <td>{receivers.receiver_organ}</td>
                                <td>{receivers.receiver_blood}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </container>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default AdminDashboard;

// <button onClick={handleDelete}><i class="fa-solid fa-trash"></i></button>
//                   <Button>
// {" "}
// <i class="fa-solid fa-delete-left"></i>
// </Button>
