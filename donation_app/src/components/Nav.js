import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
  return (
    <div>
      <div className="nav_body ">
        <Navbar className="bg-body-tertiary ">
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
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Nav;
