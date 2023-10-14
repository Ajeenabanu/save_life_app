import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./admin.css";

function AdminDashboard() {
  return (
    <div>
      <div className="nav_body">
        <Navbar expand="lg bg-body-tertiary ">
          <Container>
            <Navbar.Brand className="Name" href="/">
              <img
                alt=""
                src="https://static.vecteezy.com/system/resources/previews/024/072/755/non_2x/illustration-of-a-doctor-holding-a-heart-symbol-world-heart-day-free-png.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <h1>Save Life App</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navlist me-auto">
                <Nav.Link href="donor_list">Donor</Nav.Link>
                <Nav.Link href="receiver_list">Receiver</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/">
                  LogOut <i class="fa-solid fa-right-from-bracket"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="admin_listbody">

      </div>
    </div>
  );
}

export default AdminDashboard;
