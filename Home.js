
import React from 'react';
import { Navbar, Nav, Breadcrumb, Carousel, Card, Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="https://th.bing.com/th?id=OIP.PV6Dz_FxeBe2f79afYoqzwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Travel website
        </Navbar.Brand>
        {/* Navbar content */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {/* Navbar links */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">About</Breadcrumb.Item>
      </Breadcrumb>

      {/* Content */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.PGOqIitFWuMUeMa_9-cyJAHaEo?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            width="150"
            height="500"
            alt="Slide 1"
          />
          <br/>
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.V8vZB8aXEuoBv8fiIBwXWgHaF-?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            width="150"
            height="500"
            alt="Slide 2"
          />
          <br/>
          <Carousel.Caption>
            <h3>Slide 2 Title</h3>
            <p>Slide 2 description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src=""/>
              <Card.Body>
                <Card.Title>Goa</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Ooty</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Ladakh</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
      <footer>
        <p>&copy; Travel website</p>
      </footer>
    </div>
  );
}

export default Home;