import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";
import { Link } from "react-router-dom";

function ReceiverList() {
  const navigate = useNavigate();

  const [receivers, setReceivers] = useState([]);
const getUsers=()=>{
  axios
  .get("http://localhost:3001/receiver_list")
  .then((receivers) => setReceivers(receivers.data))
  .catch((err) => console.log(err));

}
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/admin_login')
    }
    getUsers()
  }, []);
  
  const handleRemove = async (id) => {
    await axios
      .delete("http://localhost:3001/delete_receiver/" + id)
      .then((result) => {
        console.log(result.data);
        if (result.data.status === 'success') {

          alert("A Receiver is Removed Successfully");
          getUsers();
        } else {
          alert("you have an error");
        }
      });
  };

  console.log(receivers);

  return (
    <div className="list">
      <div className="navshadow">
        <Container>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <div className="col-6">
              <Navbar.Brand href="" className="toggleimg">
                <img
                  alt="no images"
                  src={logo}
                  className="d-inline-block align-top "
                />{" "}
              </Navbar.Brand>
            </div>
            <div className="col-6">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="navlist">
                  <Nav.Link href="/donor_list" className="text-dark">
                    Donor{" "}
                  </Nav.Link>
                  <Nav.Link href="/receiver_list" className="text-dark">
                    Receiver{" "}
                  </Nav.Link>
                  
                  <Link to="/admin_login" className="text-dark">
                  <i class="fa-solid fa-right-from-bracket"></i>

                  </Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </Container>
      </div>
      <div className="seeList ">
      <container>

        <table className="table table-bordered mt-5 pt-5">
          <thead>
            <tr>
              <th>Receiver Name</th>
              <th>Receiver Age</th>
              <th>Receiver Mobile</th>
              <th>Receiver Organ</th>
              <th>Receiver Blood Group</th>
              <th>Receiver disease</th>
              <th>Receiver doctor</th>
              <th>Receiver Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {receivers.map((receivers, index) => (
              <tr key={index}>
                <td>{receivers.receiver_name}</td>
                <td>{receivers.receiver_age}</td>
                <td>{receivers.receiver_mobile}</td>
                <td>{receivers.receiver_organ}</td>
                <td>{receivers.receiver_blood}</td>
                <td>{receivers.receiver_disease}</td>
                <td>{receivers.receiver_doctor}</td>

                <td>{receivers.receiver_address}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      handleRemove(receivers._id);
                    }}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={() => navigate("/admin_dashboard")}
          className="btn btn-primary"
        >
          Back
        </button>
        </container>
      </div>
     
    </div>
  );
}

export default ReceiverList;
