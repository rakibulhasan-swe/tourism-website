import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import errorPage from '../../images/404.jpg'
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const NoMatch = () => {
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col className='mx-auto' md={5}>
            <img className='img-fluid' src={errorPage} alt="Error Page" />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default NoMatch;
