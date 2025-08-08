import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/logo.png"
            alt="Merake Sports"
            style={{ height: '40px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact="true">
              Home
            </Nav.Link>
            <NavDropdown title="Africa" id="africa-dropdown">
              <NavDropdown.Item as={NavLink} to="/africa-cup">Africa Cup of Nations</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/caf-champions">CAF Champions League</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/rest-of-africa">Rest Of Africa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/diaspora">
              Diaspora
            </Nav.Link>
            <Nav.Link as={NavLink} to="/yesteryear">
              YesterYear
            </Nav.Link>
            <Nav.Link as={NavLink} to="/fixtures-results">
              Fixtures And Results
            </Nav.Link>
            <Nav.Link as={NavLink} to="/south-africa">
              South Africa
            </Nav.Link>
            <NavDropdown title="Nigeria" id="nigeria-dropdown">
              <NavDropdown.Item as={NavLink} to="/nigeria-league">Nigeria League</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/federation-cup">Federation Cup</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/super-cup">Super Cup</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Zambia" id="zambia-dropdown">
              <NavDropdown.Item as={NavLink} to="/zambia-league">Zambia League</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/absa-cup">ABSA Cup</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Zimbabwe" id="zimbabwe-dropdown">
              <NavDropdown.Item as={NavLink} to="/zimbabwe-premier">Zimbabwe Premier Soccer League</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/independence-cup">Independence Cup</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/chibuku-super-cup">Chibuku Super Cup</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;