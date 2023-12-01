import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

function Footer() {
  return (
    <div>
    <div className="footer">
          <div className="contactfooter">
            <Container>
              <Row>
                <Col>
                  <h6 >Information</h6>
                  <div>Home</div>
                  <div className="mb-4">About</div>
                  <h6>social Meadia</h6>
                  <div className="footericons">
                    <i class="fa-brands fa-facebook"></i>{" "}
                    <i class="fa-brands fa-twitter"></i>{" "}
                    <i class="fa-brands fa-instagram"></i>{" "}
                    <i class="fa-brands fa-youtube"></i>
                  </div>
                </Col>
                <Col>
                  <h6 >Address</h6>
                  <p>23-15 English street in India</p>
                  <p>savelife@gmail.com</p>
                  <div>8765342367</div>
                </Col>
                <Col>
                  We provide immediate access to blood donors and organ donors
                  all over india, 24 hours a day, 7 days a week!{" "}
                </Col>
              </Row>
            </Container>
          </div>
          <Container>
            <hr></hr>
          </Container>
          <div>Save Life App</div>
          <div>Copyright &#169; donors.com | All right reserved</div>
        </div>
      
    </div>
  )
}

export default Footer
