import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const JoyBegins = () => {
  return (
    <Container
      className=" py-5 d-flex flex-column text-light align-items-center justify-content-center"
      style={{ minHeight: " 50vh" }}
    >
      <h1 className="text-center">PLAYPENNY - THE JOY BEGINS</h1>
      <br />
      <br />
      <Row className="g-3">
        <Col sm={12} lg={4}>
          <Card className="bg-dark text-light" style={{ height: "100%" }}>
            <Card.Body>
              <h3>The Top Choice Rummy Website</h3>
              <ul>
                <li>Certified with RNG</li>
                <li>Smooth & Easy User Interface</li>
                <li>Available on PC & Browser</li>
                <li>Play 24/7 with your friends or solo</li>
                <li>Top Payments options available</li>
                <li>Easy & Fast Cash Withdrawal</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card className="bg-dark text-light" style={{ height: "100%" }}>
            <Card.Body>
              <h3>How to Play Rummy on Playpenny?</h3>
              <ul>
                <li>No of Players - 2 to 6</li>
                <li>No of Cards - 2 deck of cards</li>
                <li>Each Player is dealt with 13 Cards</li>
                <li>Player has to draw & discard cards in turn</li>
                <li>Other cards from valid sequences or sets.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card className="bg-dark text-light" style={{ height: "100%" }}>
            <Card.Body>
              <h3>How to Login Playpenny?</h3>
              <ul>
                <li>Browse the Playpenny website</li>
                <li>New users click ‘Signup’ and enter no.</li>
                <li>Enter OTP & login easily</li>
                <li>Old users can directly login</li>
                <li>Easy to use</li>
                <li>Deposit & Withdraw directly</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JoyBegins;
