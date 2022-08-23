import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Section1.css";
import image from "../../assets/casino-banner-with-golden-cards-crown/SL-083019-22930-06 [Converted].png";
const Section1 = () => {
  return (
    <div className="section1__container">
      <Container>
        <Row className="g-3 ">
          <Col
            sm={12}
            lg={6}
            className="text-light d-flex flex-column justify-content-center"
          >
            <h1>DECCAN RUMMY - TOPMOST WEBSITE TO PLAY POPULAR RUMMY GAMES</h1>
            <h5>
              Register for free with Deccan Rummy and start playing rummy
              online. Deccan Rummy is a user-friendly website which offers
              multiple games online. Show us your rummy skills and win exciting
              prizes.
            </h5>
          </Col>
          <Col sm={12} lg={6}>
            <img
              src={image}
              className="w-100"
              alt=""
              //   style={{ mixBlendMode: "darken" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
