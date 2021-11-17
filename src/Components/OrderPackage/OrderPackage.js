import React, { useEffect, useState, useContext } from "react";
import { Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Loader from "../Loader/Loader";

const OrderPackage = () => {
  const [contextData] = useContext(UserContext);
  const [orderPackage, setOrderPackage] = useState({});
  const [orderData, setOrderData] = useState();
  const [loading, setLoading] = useState(true);
  const id = useParams().id;
  const backendUrl = "https://salty-springs-75892.herokuapp.com";

  const { displayName, email } = contextData;

  useEffect(() => {
    fetch(`${backendUrl}/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderPackage(data[0]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    setOrderData({
      name: contextData.displayName,
      email: contextData.email,
      packageName: orderPackage.packageName,
      price: orderPackage.price,
      image: orderPackage.image,
      status: "pending",
    });
  }, [contextData, orderPackage]);

  const handleBlur = (e) => {
    const name = e.target.name;
    setOrderData({
      ...orderData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${backendUrl}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        swal("Order post successfully", "", "success");
        console.log("Success:", data);
      })
      .catch((error) => {
        swal(error.message, "", "error");
        console.error("Error:", error);
      });
  };
  document.title = "Order Package";
  return (
    <div>
      <Navigation />
      <Container>
        <h1 className="text-center mt-5">Order</h1>
        <Row className="py-3">
          <Col md="5">
            {loading && orderPackage !== {} ? (
              <Loader />
            ) : (
              <Card>
                <Card.Img variant="top" src={orderPackage.image} />
                <Card.Body>
                  <Card.Title>{orderPackage.packageName}</Card.Title>
                  <Card.Text>
                    People: {orderPackage.people} <br />
                    Price: {orderPackage.price} $
                  </Card.Text>
                  <Card.Text>{orderPackage.description}</Card.Text>
                  <Link to="/order-list/" className="btn btn-primary w-100">
                    See your post
                  </Link>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col md={6} className="mx-auto mt-5">
            {orderPackage && (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={displayName}
                    placeholder="Name"
                    readOnly
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    defaultValue={email}
                    placeholder="Enter email"
                    readOnly
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Package</Form.Label>
                  <Form.Control
                    type="text"
                    name="packageName"
                    defaultValue={orderPackage.packageName}
                    placeholder="package"
                    readOnly
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    onBlur={handleBlur}
                    placeholder="date"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    defaultValue={orderPackage.price}
                    placeholder="Price"
                    readOnly
                    required
                  />
                </Form.Group>

                <button className="btn btn-primary w-100" type="submit">
                  Order
                </button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default OrderPackage;
