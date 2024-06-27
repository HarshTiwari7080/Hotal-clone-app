import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="home"><img src="https://i.pinimg.com/280x280_RS/64/48/24/64482440037fb9ddb545880f6ee8a975.jpg" width='90' height="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link href="register">Register</Nav.Link>
                        <Nav.Link href="sales">Contact Us.</Nav.Link>





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;