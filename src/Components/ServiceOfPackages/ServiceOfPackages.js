import React, { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import BuyPackage from "../BuyPackage/BuyPackage";
import Loader from "../Loader/Loader";

const ServiceOfPackages = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://salty-springs-75892.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.message);
      }) 
  }, []);

  return (
    <Container>
      <h3 className="fw-bold fs-1 text-center my-5">PACKAGE'S</h3>
      <Row className="mt-3">
        {loading ? (
          <Loader />
        ) : (
          services.map((service) => (
            <BuyPackage key={service._id} packages={service}></BuyPackage>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ServiceOfPackages;
