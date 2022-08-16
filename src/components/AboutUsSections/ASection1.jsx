import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/undraw_super_woman_dv-0-y.svg";
const ASection1 = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col
          sm={12}
          lg={5}
          className="text-light d-flex flex-column justify-content-center"
        >
          <h1>ABOUT US</h1>
          <p>
            PlayPenny is an online gaming website, which provides players a
            platform to play online 13 cards and rummy games.PlayPenny provides
            you with the ultimate 13-card rummy experience and also an
            opportunity to win exciting cash prizes. We present unique features
            to provide our players with an unforgettable gaming experience and
            we always strive to deliver the Best Rummy Experience to our
            players. Playing at PlayPenny will fill your pockets & also a
            powerful dose of entertainment.
          </p>
        </Col>
        <Col sm={12} lg={7}>
          <img src={image} alt="" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default ASection1;
