import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../images/blog1.jpg";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import blog4 from "../../images/blog4.jpg";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Blog = ({ ShowNavAndFooter, shortDescription, colNum }) => {
  return (
    <>
      {ShowNavAndFooter && <Navigation></Navigation>}
      <Container>
        <h3 className="fs-1 text-center fw-bold my-5 title-bottom-line">
          OUR LATEST BLOG'S
        </h3>
        <Row className="my-3">
          <Col md={colNum} className="mb-2">
            <img
              className={shortDescription ? " w-75" : "w-100"}
              src={blog1}
              alt="Old Home"
            />
          </Col>
          <Col md={colNum}>
            <div>
              <ul
                className="d-flex align-items-center"
                style={{ listStyleType: "none", marginLeft: "-2.6%" }}
              >
                <li>September 10, 2021 |</li>
                <li>By Rakibul Hasan |</li>
                <li>5K</li>
              </ul>
            </div>
            <div>
              <h4 className="fw-bold">YOUR GUIDE TO ROME AND BEYOND</h4>
              <p
                className={`details ${shortDescription ? "text-ellipsis" : ""}`}
              >
                Ready to plan the ultimate trip to Italy? Or are you hoping to
                experience Rome like a local? Welcome to your essential guide to
                Rome, Italy and beyond – from someone who actually lives here.
                You will find hundreds of personally vetted recommendations for
                what to do in Rome, where to eat, how to get around, and what
                you shouldn’t waste your time or money on.
              </p>
              <a className="fw-bold read-more" href="/">
                READ MORE
              </a>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={colNum} className="mb-2">
            <img
              className={shortDescription ? " w-75" : "w-100"}
              src={blog2}
              alt="Old Home"
            />
          </Col>
          <Col md={colNum}>
            <div>
              <ul
                className="d-flex align-items-center"
                style={{ listStyleType: "none", marginLeft: "-2.6%" }}
              >
                <li>July 21, 2021 |</li>
                <li>By Mehedi Hasan |</li>
                <li>4K</li>
              </ul>
            </div>
            <div>
              <h4 className="fw-bold">
                EVERYONE VISITS THE GRAND PALACE IN BANGKOK
              </h4>
              <p
                className={`details ${shortDescription ? "text-ellipsis" : ""}`}
              >
                Tim, our local guide, was explaining to us on the ride over that
                the Grand Palace is at the top of the list for first time
                visitors to Bangkok.It’s true, and I had already known and
                experienced this on my own first visit ten years ago. But today
                was different. We were repeat visitors, and not travelling as a
                couple, but as parents with Kalyra and Savannah on their first
                visit to Bangkok.
              </p>
              <a className="fw-bold read-more" href="/">
                READ MORE
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={colNum} className="mb-2">
            <img
              className={shortDescription ? " w-75" : "w-100"}
              src={blog3}
              alt="Old Home"
            />
          </Col>
          <Col md={colNum}>
            <div>
              <ul
                className="d-flex align-items-center"
                style={{ listStyleType: "none", marginLeft: "-2.6%" }}
              >
                <li>October 17, 2021 |</li>
                <li>By Saim Ahmed |</li>
                <li>2K</li>
              </ul>
            </div>
            <div>
              <h4 className="fw-bold">
                TAKTSANG (THE TIGER’S NEST) MONASTERY, PARO
              </h4>
              <p
                className={`details ${shortDescription ? "text-ellipsis" : ""}`}
              >
                The Taktsang Palphug or the (the Tiger’s Nest) is a Buddhist
                temple which is built on a huge rock cliff-face at 900m (3150m
                above sea level) above the Paro Valley. Guru Rinpoche, who
                spread Buddhism across the Himalayas, is said to have flown here
                in the 8th Century on the back of a Tigress. Guru Rinpochoe,
                also called Guru Padmasambhava is a Buddhist master from India
                revered revered across the Himalayas.
              </p>
              <a className="fw-bold read-more" href="/">
                READ MORE
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={colNum} className="mb-2">
            <img
              className={shortDescription ? " w-75" : "w-100"}
              src={blog4}
              alt="Old Home"
            />
          </Col>
          <Col md={colNum}>
            <div>
              <ul
                className="d-flex align-items-center"
                style={{ listStyleType: "none", marginLeft: "-2.6%" }}
              >
                <li>January 27, 2021 |</li>
                <li>By Ellyse Perry |</li>
                <li>7K</li>
              </ul>
            </div>
            <div>
              <h4 className="fw-bold">
                YOUR GUIDE TO EGYPT (THE MYSTERIOUS PLACE)
              </h4>
              <p
                className={`details ${shortDescription ? "text-ellipsis" : ""}`}
              >
                Egypt has fascinated me for as long as I can remember. As a
                child, I would gaze in admiration at the pyramids and pharaohs
                in kids’ books. Once I started traveling the world as an adult,
                Egypt was on TOP of my dream destinations; which almost
                coincided with the 2011 revolution leading everyone to be afraid
                of traveling to Egypt and shattering my dreams. But 7 years
                later, tourism in Egypt is slowly standing back on its feet and
                I right away seized the opportunity to visit this magical
                destination. And it was much beyond what I had imagined about
                Egypt all these years – It has been the best trip of my life.
              </p>
              <a className="fw-bold read-more" href="/">
                READ MORE
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {ShowNavAndFooter && <Footer></Footer>}
    </>
  );
};

export default Blog;
