import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = ()=>{
    signOut(auth)
  }
  return (
    <Navbar bg="dark" expand="lg" style={{position:'sticky',top:'0'}}>
      <Container fluid>
        <Navbar.Brand as={Link} to="#">
          {" "}
          <img height={"40px"} width={"190px"} src={logo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5  my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/home#experts">Experts</Nav.Link>
            <Nav.Link  href="/home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
          </Nav>
          <Nav
          >
            {user?<button onClick={handleLogout}>logout</button>:<Nav.Link as={Link} to='/login'>Login</Nav.Link>}
            <Nav.Link as={Link} to='signup'>SignUp</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
