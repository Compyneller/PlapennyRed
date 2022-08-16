import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/18973620 [Converted].png";
const Section5 = () => {
  return (
    <Container
      className=" d-flex py-5 align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="text-light d-flex flex-column justify-content-center"
        >
          <h3>
            GET REWARDS, DOUBLE SATISFACTION & NEVER ENDING FUN- PLAY ONLINE
            RUMMY ON PLAYPENNY
          </h3>
          <p>
            Are you bored from the tantrums of your busy life? Play online rummy
            on Playpenny and win exciting rewards, get a bonus, and even a huge
            cash prize. As we know, rummy is the most popular game of the ages.
            Whether it’s a teenager or a retired grandpa, rummy makes all of us
            excited about the fun it offers us while playing it. We all are
            familiar with the existence of digitalization as technology is
            updating every second of the clock! So, it will be no less than a
            joy playing your favorite cards online, anywhere & anytime.
            Playpenny offers you the best user-friendly platform that will
            provide you the best gaming experience regardless of whether you're
            a rummy newbie or a veteran. Enjoy the best comfort of playing
            online rummy at your own place, any time of the day. Get the super
            services at Playpenny which is the safest, fastest & easiest!
          </p>
        </Col>
        <Col sm={12} lg={6}>
          <img src={image} className="w-100" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section5;
