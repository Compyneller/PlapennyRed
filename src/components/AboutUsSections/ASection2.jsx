import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/undraw_eco_conscious_re_r2bs.svg";
const ASection2 = () => {
  return (
    <Container
      className="d-flex align-items-center"
      style={{ minHeight: " 100vh" }}
    >
      <Row className="g-3">
        <Col sm={12} lg={7}>
          <img src={image} alt="" className="w-100" />
        </Col>
        <Col
          sm={12}
          lg={5}
          className="text-light d-flex flex-column justify-content-center"
        >
          <h1>Who are we?</h1>
          <p>
            Deccan Rummy has a dedicated team of designers and developers with
            huge experience in the online gaming platform. The exciting theme,
            smooth user experience, and vibrant design let our gamers play
            without any hassle. The high standard of the Deccan Rummy in the
            gaming industry will give you the best experience on the rummy
            platform for the community of online players. Start playing rummy
            games and win exciting prizes & bonuses.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ASection2;
