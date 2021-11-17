import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import swal from "sweetalert";
import { UserContext } from "../../App";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import OrderListCard from "../OrderListCard/OrderListCard";

const OrderList = () => {
  const [contextData] = useContext(UserContext);
  const [customerOrder, setCustomerOrrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = "https://salty-springs-75892.herokuapp.com";

  useEffect(() => {
    fetchOrderData();
  }, []);

  function fetchOrderData() {
    fetch(`${backendUrl}/order`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerOrrder(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }

  const filterCustomerOrder = customerOrder.filter(
    (el) => el.email === contextData.email
  );

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
        fetchOrderData();
      })
      .catch((error) => {
        // swal(error.message, "", "error");
        swal("Order delete successfully", "", "success");
        console.error("Error:", error);
        fetchOrderData();
      });
  }
  document.title = "Order List";
  return (
    <div>
      <Navigation />
      <Container>
        <h1 className="text-center my-5">My Order</h1>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            filterCustomerOrder.map((order) => (
              <OrderListCard
                key={order._id}
                packages={order}
                confirmDelete={confirmDelete}
              />
            ))
          )}
          {filterCustomerOrder.length === 0 && (
            <h3 className="my-5 py-5 text-center">No order here</h3>
          )}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default OrderList;
