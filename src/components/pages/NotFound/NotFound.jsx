import "./NotFound.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../../featurs/Footer/Footer";

function NotFound() {
  return (
    <Container className="not-found">
            <Row className="justify-content-center">
        <Header/>
      </Row>
      <img src="/images/notfound.png" alt="" />
      <Row className="justify-content-center">
        <Footer/>
      </Row>
    </Container>
  );
};

export default NotFound;
