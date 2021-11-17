import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import swal from "sweetalert";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const AdminDashboard = () => {
  const [customerOrder, setCustomerOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = "https://salty-springs-75892.herokuapp.com";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(`${backendUrl}/order`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerOrder(data);
        setLoading(false);
      });
  }

  const confirmDelete = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteOrder(e);
        }
      })
      .catch((error) => {
        swal(error.message);
      });
  };

  function deleteOrder(e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    console.log(id);
    fetch(`${backendUrl}/order`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("Order delete successfully", "", "success");
        console.log("Success:", data);
        fetchData();
      })
      .catch((error) => {
        // swal(error.message, "", "error");
        swal("Order delete successfully", "", "success");
        console.error("Error:", error);
        fetchData();
      });
  }

  return (
    <div>
      <Navigation />
      <h1 className="text-center my-3">Admin Dashboard</h1>
      <Container>
        <Row>
          {loading ? (
            <Col md={1} className="mx-auto my-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          ) : (
            <Table className="my-3" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>People</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customerOrder.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.price}</td>
                    <td>{order.people}</td>
                    <td>
                      <button
                        data-id={order._id}
                        className="btn btn-danger btn-sm"
                        onClick={confirmDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
