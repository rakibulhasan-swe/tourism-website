import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const BuyPackage = ({ packages, orderBuy }) => {
  const { packageName, description, price, image, numberOfDays, people } = packages;
  return (
    <Col md={4} className="mx-auto">
      <Card className="my-3 mx-auto shadow p-3 buyPackageCard">
        <Card.Img className="card-img-top rounded" src={image} />
        <Card.Body>
          <Card.Title className="pb-2 fw-bold">{packageName}</Card.Title>
          <Card.Text>
          {description.slice(0, 110) + (description.length > 110 ? "..." : "")}
          </Card.Text>
          <hr />
          <p>
            <span className="me-5">
              <FontAwesomeIcon
                className="text-primary me-2"
                icon={faCalendar}
              ></FontAwesomeIcon>
              No Of Days: {numberOfDays}
            </span>
            <span>
              <FontAwesomeIcon
                className="me-2 text-primary"
                icon={faUser}
              ></FontAwesomeIcon>
              People: {people}
            </span>
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="fw-bold text-primary">Price: ${price}</h5>
            </div>
            {!orderBuy ? (
              <Link to={`package-detail/${packages._id}`}>
                <Button variant="primary fw-bold">Buy Now</Button>
              </Link>
            ) : (
              <button type="button" className="btn btn-info btn-sm">
                Delete
              </button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BuyPackage;
