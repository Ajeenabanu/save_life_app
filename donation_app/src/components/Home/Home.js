import React, { useState } from "react";
import "./home.css";
import Navgation from "./Navgation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import organ from "./imges/organimg.png";
import blood from "./imges/blood.png";
import about from "./imges/about.gif";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Footer from "./Footer";
import axios from "axios";
// import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");

  // submit
  const handleSend = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/get_message", {
        name: name,
        mobile: mobile,
        comment: comment,
      })

      .then((result) => {
        if (result.data === "please enter all fields") {
          alert("please enter all fields");
        } else {
          alert("Message send successfully");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Navgation />
      <div className="home">
        <Container>
          <Row>
            <Col xs={12} md={6} className="col1">
              <h4>Be someone's lifeline; donate blood</h4>
              <div>
                <p>
                  {" "}
                  Donate blood responsibly, not on roads but at blood donation
                  camps. A single drop of your blood could be a drop of life for
                  someone else. Maintain a healthy lifestyle & donate blood.
                  Save life website is help you to donate blood
                </p>
                <button className="homebtn">Read More</button>
              </div>
            </Col>
            <Col xs={12} md={6} className="col2">
              <img src={blood} alt="no img" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="home2">
        <Container>
          <Row className="">
            <Col xs={12} md={6} className="col3">
              <img src={organ} alt="no img"></img>
            </Col>
            <Col xs={12} md={6} className="col4">
              <h3>Be someone's lifeline; donate organ</h3>
              <div>
                <p>
                  {" "}
                  Organ donation can save lives. For individuals suffering from
                  organ failure or life-threatening conditions, receiving a
                  transplant can be their only chance for survival. Donors
                  provide hope and a second chance at life.{" "}
                </p>
                <button className="homebtn">Read More</button>

                <h1 class="animated-text">
                  Don't take your organs to heaven with you. Heaven knows we
                  need them here!
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about" id="about">
        <Container>
          <Row>
            <h3 className="text-center pt-5 pb-3">About Us</h3>
            <p className="text-center">
              Promoting Blood and Organ Donation for Lifesaving Impact
            </p>
            <Col xs={12} md={6} className="aboutlabel">
              <div>
                <h3>About Save Life</h3>
                <p>
                  We provide immediate access to blood donors and organ donors
                  all over India, 24 hours a day, 7 days a week! Save Life
                  Connect is one of several community organizations working
                  together as a network that responds to disasters or emergency
                  situations in an efficient manner.
                </p>
                <h3>What we do?</h3>
                <p>
                  The ultimate goal is to provide an easy-to-use,
                  easy-to-access, efficient, and reliable way to get life-saving
                  blood, free of cost. Save Life Connect works with network
                  partners to connect blood and organ donors and recipients
                  through this site. Our network of volunteer blood donors is
                  ready to help save lives anytime, anywhere.
                </p>
                <h3>Don't have access to the internet?</h3>
                <p>
                  In case someone is unable to use the website or lacks
                  knowledge of how to find a blood donor in an emergency, we
                  have a contact number you can call, or you can send your
                  queries below.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} className="aboutimg">
              <img src={about} alt="no img"></img>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="contact">
        <div className="contact">
          <h2 className="text-center">Contact Us</h2>

          <Container>
            <div className="formpadding">
              <FloatingLabel
                controlId="floatingInput"
                label="Full Name"
                className="mb-3"
              >
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="enter your name "
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Contact No"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
  
  
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <button onClick={handleSend} className="homebtn mt-3">
                Send Message
              </button>
            </div>
          </Container>
        </div>
      </div>
      <footer>
        <div className="home_footer">
          <Container>
            <h3>Let your life go on in someone’s body</h3>
            <p>
              Organ donation is a valuable act performed by an individual while
              either they are alive, or dead, by his successors. Such a
              procedure allows a person’s organ to be transplanted to another
              person either with the permission of a doctor or with the consent
              of the family after he has expired. The common organs that are
              generally transplanted are the heart, kidneys, liver, or skin.
            </p>
          </Container>
        </div>
      </footer>
      <Footer />
    </div>
  );
}

export default Home;
// https://media.mehrnews.com/d/2017/06/24/4/2496461.jpg

// about

//  <div className="container">
// <div id="about">
