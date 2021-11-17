import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import swal from "sweetalert";

const Navigation = () => {
  const [contextData, setContextData] = useContext(UserContext);
  const auth = getAuth();

  useEffect(() => {
    loggedInUser();
  }, []);

  const loggedInUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { accessToken, displayName, email, photoURL } = user;
        setContextData({ accessToken, displayName, email, photoURL });
      } else {
        setContextData({});
      }
    });
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        swal("SignOut successful", "Account Sign Out successful", "success");
      })
      .catch((error) => {
        swal("SignOut Error", error.message, "error");
      });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow py-3">
        <Container>
          <Link to="/">
            <img className="navbar-brand w-50" src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                className="nav-link fw-bold"
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Home
              </NavLink>
              <NavLink className="nav-link fw-bold" to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link fw-bold" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link fw-bold" to="/blog">
                Blog
              </NavLink>

              {contextData.displayName ? (
                <>
                  <button className="btn btn-primary">
                    {contextData.displayName}
                  </button>
                  <Link
                    to="/addService"
                    className="btn btn-primary mx-1"
                  >
                    Add service
                  </Link>
                  <Link to="/order-dashboard" className="btn btn-primary mx-1">
                    Manage Order
                  </Link>
                  <Link to="/order-list" className="btn btn-primary mx-1">
                    My Order
                  </Link>
                  <button
                    className="btn btn-outline-danger mx-1"
                    onClick={userSignOut}
                  >
                    SignOut
                  </button>
                </>
              ) : (
                <Link to="/login" className="ms-1 btn btn-outline-dark">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
