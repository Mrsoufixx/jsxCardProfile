import logo from "../Assets/logoskwhite.svg";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid className="d-flex justify-content-between col-10">
        <Navbar.Brand href="/" className="text-light me-5 ">
          <img src={logo} alt="soufiane" style={{width: "3rem"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Button variant="outline-light">My Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
