import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Home() {
  return (
    <div>
      <div className="nav_body ">
        <Nav />
      </div>
      <div className="home_body">
        <div className="home_grid">
          <p>A second chance is in your hands ! </p>
          <div className=" d-grid gap-4 ">
            <Link to="/donor_login">
              <Button className="home_button">DONOR</Button>
            </Link>
            <Link to="/receiver_login">
              <Button className="home_button">RECEIVER</Button>
            </Link>

            <Link to="/admin_login">
              <Button className="home_button">ADMIN</Button>
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <div className="home_footer">
          <h3>Let your life go on in someone’s body</h3>
          <p>
            Organ donation is a valuable act performed by an individual while
            either they are alive, or dead, by his successors. Such a procedure
            allows a person’s organ to be transplanted to another person either
            with the permission of a doctor or with the consent of the family
            after he has expired. The common organs that are generally
            transplanted are the heart, kidneys, liver, or skin.
          </p>
        </div>
        <div className="footer">
          <div>Save Life App</div>
          <div>made in india &#169; 2023 </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
