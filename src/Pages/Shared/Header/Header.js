import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const {user,logOut} = useAuth()

  return (
    <div className="">
      <Navbar expand="lg ">
        <Container>
          <Navbar.Brand href="/">
          <img src="https://i.ibb.co/JHDY3fd/download.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link as={Link} to="/order">
                My Order
              </Nav.Link>
              }
              {
                user?.email && <Nav.Link as={Link} to="/createNewEvent">
                Create New Event
              </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link as={Link} to="/management">
                Managment
              </Nav.Link>
              }
              <Nav.Link as={Link} to="/contact">
                Contact US
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
              <button className="btn default-bg text-white ms-3" onClick={logOut}>Log out</button>
            </Link> : <Link to="/login">
              <button className="btn default-bg text-white ms-3">Login</button>
            </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
