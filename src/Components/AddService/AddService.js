import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import swal from "sweetalert";


const AddService = () => {
  const [service, setService] = useState();

  const backendUrl = "http://localhost:4000";

  const handleBlur = (e) => {
    const name = e.target.name;
    setService({
      ...service,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${backendUrl}/service`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("Order post successfully", "", "success");
        console.log("Success:", data);
        e.target.reset();
      })
      .catch((error) => {
        swal(error.message, "", "error");
        console.error("Error:", error);
      });
  };

  document.title = "Add Service";

  return (
    <div>
      <Navigation />
      <Container>
        <Row className="py-5">
          <h1 className="text-center py-3">Add services</h1>
          <Col md={8} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Package name</Form.Label>
                <Form.Control
                  type="text"
                  name="packageName"
                  placeholder="Package name"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>cover picture</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  spellCheck
                  rows={3}
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Number Of Days</Form.Label>
                <Form.Control
                  type="number"
                  name="numberOfDays"
                  placeholder="Days"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>People</Form.Label>
                <Form.Control
                  type="number"
                  name="people"
                  placeholder="People"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <button className="btn btn-primary w-100" type="submit">
                Add Service
              </button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default AddService;
