import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          // className="bg-body-tertiary mb-3 text-danger"
          className={styles.navBar}
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  alt=""
                  // src="../public/cropped-RPG-RIO.png"
                  src="https://rpgrio.com.br/wp-content/uploads/2023/09/cropped-RPG-RIO.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                RPG RIO
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    alt=""
                    // src="../public/cropped-RPG-RIO.png"
                    src="https://rpgrio.com.br/wp-content/uploads/2023/09/cropped-RPG-RIO.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  RPG RIO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-danger">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to="/">Eventos </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/sobre">Sobre </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/contato">Cadastre o seu evento </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
