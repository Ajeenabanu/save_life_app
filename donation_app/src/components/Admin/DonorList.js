import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Home/imges/logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function DonorList() {
  const navigate = useNavigate();

  const [donors, setDonors] = useState([]);
  // get user

  const getUser = () =>
    axios
      .get("http://localhost:3001/donor_list")
      .then((response) => setDonors(response.data))
      .catch((err) => console.log(err));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin_login");
    }
    getUser();
  }, []);

  console.log(donors);

  const handleRemove = async (id) => {
    await axios
      .delete("http://localhost:3001/delete_donor/" + id)
      .then((result) => {
        if (result.data.status === "success") {
          alert("A Donor is Removed Successfully");
          getUser();
        } else {
          alert("you have an error");
        }
      });
  };

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
        <table className="table table-bordered mt-5 pt-5">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Donor Age</th>
              <th>Donor Mobile</th>
              <th>Donor Organ</th>
              <th>Donor Blood Group</th>
              <th>Donor Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.donor_name}</td>
                <td>{donor.donor_age}</td>
                <td>{donor.donor_mobile}</td>
                <td>{donor.donor_organ}</td>
                <td>{donor.donor_blood}</td>
                <td>{donor.donor_address}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      handleRemove(donor._id);
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
      </div>
    </div>
  );
}

export default DonorList;
