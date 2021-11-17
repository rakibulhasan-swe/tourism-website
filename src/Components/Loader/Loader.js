import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Container>
      <Row>
        <Col md={1} className="mx-auto my-5">
          <Spinner animation="border" role="status" className="mx-4">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  );
};

export default Loader;
