import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import Logo from "./Logo";

function NavBar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={styles.navBar}
        >
          <Container fluid>
            <Logo/>
            <Navbar.Toggle className={styles.navBarButton} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
             
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  RPG RIO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  className={styles.navbarMobile}>
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
