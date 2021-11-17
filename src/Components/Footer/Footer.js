import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFax,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="bg-color py-5">
      <Container>
        <Row>
          <Col md={4} className="text-light py-2 ">
            <h4 className="mb-5">TRAVEL</h4>
            <div style={{ color: "#dae1eb" }}>
              <p>
                <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />{" "}
                Brodway Road 234, New York
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faPhoneAlt} /> Mobile:
                +00 1234 456789
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faEnvelope} /> Mail:
                info@travel.com
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faFax} /> Fax: 000 123
                2294 089
              </p>
            </div>
          </Col>
          <Col md={4} className="text-light py-2">
            <h4 className="mb-5">TO GET UPDATED</h4>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <Button variant="outline-secondary" id="button-addon2">
              Subscribe
            </Button>
          </Col>
          <Col md={4} className="text-light py-2">
            <h4 className="mb-5">TAG'S</h4>
            <div className="tags">
              <a href="/">Bangladesh</a>
              <a href="/">Switzerland</a>
              <a href="/">Bali</a>
              <a href="/">Maldives</a>
              <a href="/">Madrid</a>
              <a href="/">London</a>
              <a href="/">Saudi Arabia</a>
              <a href="/">Niagra Falls</a>
              <a href="/">Rome</a>
              <a href="/">Italy</a>
              <a href="/">Greenland</a>
              <a href="/">India</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
