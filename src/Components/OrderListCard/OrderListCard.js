import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const OrderListCard = ({ packages, confirmDelete }) => {
  console.log(packages);
  return (
    <>
      <Col md={6} className="mx-auto">
        <Card className="my-3 mx-auto shadow">
          <Row>
            <Col md={6}>
              <Card.Img
                className="card-img-top rounded p-3"
                src={packages.image}
              />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title className="pb-2 fw-bold">
                  Package Name: {packages.packageName}{" "}
                  <span className="badge bg-secondary">{packages.status}</span>
                </Card.Title>
                <Card.Text>
                  Name: {packages.name} <br />
                  Price:${packages.price}
                </Card.Text>
                <button
                  data-id={packages._id}
                  onClick={confirmDelete}
                  className="btn btn-outline-danger btn-sm"
                  type="button"
                >
                  Delete
                </button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default OrderListCard;
