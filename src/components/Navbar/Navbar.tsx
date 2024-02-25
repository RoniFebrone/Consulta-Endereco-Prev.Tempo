import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.scss'


function NavbarComponent() {
    return (
        <Navbar expand="lg" className={"bg-primary"}>
            <Container>
                <Navbar.Brand href="#Enderecos">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center">
                        <Nav.Link className="mx-auto custom-font-size" href="#Enderecos">Endereços</Nav.Link>
                        <Nav.Link className="mx-auto custom-font-size" href="#Prev">Previsão do tempo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;