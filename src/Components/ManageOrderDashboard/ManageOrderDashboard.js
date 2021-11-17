import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import swal from "sweetalert";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const ManageOrderDashboard = () => {
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

  function handleChange(e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const value = e.target.value;
    fetch(`${backendUrl}/order/${value}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("Update message", "Data update succeeded", "success");
        // console.log("Success:", data);
      })
      .catch((error) => {
        // console.error("Error:", error);
        swal("", error.message, "error");
      });
  }

  document.title = "Manage Order Dashboard";

  return (
    <div>
      <Navigation />
      <h1 className="text-center my-3">Order Dashboard</h1>
      <Container>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            <Table className="my-3" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Package Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customerOrder.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.packageName}</td>
                    <td>{order.price}</td>
                    <td>{order.date}</td>
                    <td>
                      <select
                        data-id={order._id}
                        className="form-select"
                        defaultValue={order.status}
                        onChange={handleChange}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                      </select>
                    </td>
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

export default ManageOrderDashboard;
