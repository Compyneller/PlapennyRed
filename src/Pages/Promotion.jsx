import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import BottomCard from "../components/PromotionsComp/BottomsCard/BottomCard";
import Daily from "../components/PromotionsComp/Daily/Daily";
import HotDeals from "../components/PromotionsComp/HotDeals/HotDeals";
import MidText from "../components/PromotionsComp/MidText/MidText";
import NoDownloads from "../components/PromotionsComp/NoDownloads/NoDownloads";
import Other from "../components/PromotionsComp/OtherPromotions/Other";
import PromHeader from "../components/PromotionsComp/PromHeader/PromHeader";

import RummyCode from "../components/PromotionsComp/RummyCode/RummyCode";
import TableComp from "../components/PromotionsComp/Table/TableComp";

const Promotion = () => {
  return (
    <>
      <NavBarComp />

      {/* <Other /> */}
      <MidText />
      {/* <TableComp /> */}
      <Container>
        <Row className="g-3">
          <Col sm={12} lg={6} className="d-flex align-items-center ">
            <RummyCode />
          </Col>
          <Col sm={12} lg={6}>
            <PromHeader />
          </Col>
        </Row>
      </Container>
      {/* <HotDeals /> */}
      <br />
      <br />
      <BottomCard />
      <NoDownloads />
      <Daily />
      <Footer />
    </>
  );
};

export default Promotion;
