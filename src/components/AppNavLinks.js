import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function AppNavLinks() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid={true}>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/explore">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/notifications">
                Notifications
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavLinks
