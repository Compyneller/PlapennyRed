import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark" style={{ width: "100%", padding: "3rem 0" }}>
      <Container className="text-center text-light">
        <Row className="g-3 d-flex justify-content-center">
          <div className="col-6 col-lg-3 privacyLink ">
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/tc"
            >
              Terms & Conditions
            </Link>
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/rummy-legal"
            >
              Legal
            </Link>
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/disclaimer"
            >
              Disclaimer
            </Link>
          </div>
          <div className="col-6 col-lg-3 privacyLink">
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/rummy-rules"
            >
              Rummy Rules
            </Link>
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/rummy-tips"
            >
              Rummy Tips
            </Link>
            <Link
              className="text-light"
              onClick={() => window.scroll(0, 0)}
              to="/rummy-faq"
            >
              FAQ
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
