import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to="../home">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="../home">Home</Link>
            <Link to="../login">Login</Link>
            <Link to="../book">Book</Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;