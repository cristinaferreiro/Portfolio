import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../context/auth.context';

function Navigation() {
    const { user, logout } = useContext(AuthContext);

    return (
        <Navbar className="bg-body-tertiary rounded-navbar" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">Cristina Ferreiro</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/projects">Proyectos</Nav.Link>
                    <Nav.Link as={Link} to="/about">Sobre mí</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
