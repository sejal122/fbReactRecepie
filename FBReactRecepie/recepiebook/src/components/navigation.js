import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container className="d-flex">
          <Navbar.Brand href="#home">YouChef</Navbar.Brand>
          <Nav >
            <Nav.Link ><button className="btn btn-info"><Link to='/addnew'>Add new</Link></button></Nav.Link>
            <Nav.Link href="#features">View all</Nav.Link>
            <Nav.Link href="#pricing">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
