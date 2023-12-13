import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="d-flex justify-content-between px-2">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
                        <Nav.Link as={NavLink} to={'/categories'}>Categories</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
