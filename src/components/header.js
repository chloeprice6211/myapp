import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from './mainHeaderLogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="white" variant="white">

                <Container>



                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="BNBgame"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">GAME</Nav.Link>
                            <Nav.Link href="/">REFERRALS</Nav.Link>
                            <Nav.Link href="/">SUPPORT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">
                                <button className="button-nav">
                                   SIGN OUT
                                </button>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        )
    }
}
