import './Header.css';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
function Header()
{
    return(
        <div>
          <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <div className="part1">
    <Navbar.Brand href="#"><img src="./logo.jpg" width="170px" height="60px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search for Movies,Events,Plays,Sports and Activities"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Nav>
      
    </Navbar.Collapse>
    </div>
     
        <div className="part2">
        <NavDropdown title="Choose your place" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Button variant="danger">Signin</Button>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </div>
  </Container>
  
</Navbar>
<Container fluid style={{padding:"0",margin:"0"}}>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#movies">Movies</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#stream">Stream</Nav.Link>
      <Nav.Link href="#events">Events</Nav.Link>
      <Nav.Link href="#plays">Plays</Nav.Link>
      <Nav.Link href="#sports">Sports</Nav.Link>
      <Nav.Link href="#activities">Activities</Nav.Link>
      <Nav.Link href="#buzz">Buzz</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#listyourshow">ListYourShow</Nav.Link>
       <Nav.Link href="#corporates">Corporates</Nav.Link>
       <Nav.Link href="#offers">Offers</Nav.Link>
       <Nav.Link href="#giftcards">GiftCards</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
  </Container>
        </div>
    );
}

export default Header;