import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from "../../assets/realistic-casino-background/2314088.png";
const CardsComp = () => {
  return (
    <Container className="d-flex py-5 align-items-center justify-content-center vh-50 ">
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <img src={image} className="w-100" alt="" />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="text-light d-flex align-items-center flex-column justify-content-center text-center"
        >
          <h1>BENEFITS OF DECCAN RUMMY</h1>
          <Row className="g-3">
            <Col sm={6} lg={6}>
              <Card className="bg-dark">
                <Card.Body>
                  <h5>Register for FREE</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={6}>
              <Card className="bg-dark">
                <Card.Body>
                  <h5>First time registration bonus</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={6}>
              <Card className="bg-dark">
                <Card.Body>
                  <h5>Free rummy matches</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={6}>
              <Card className="bg-dark">
                <Card.Body>
                  <h5>Refer & Earn bonus</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsComp;
