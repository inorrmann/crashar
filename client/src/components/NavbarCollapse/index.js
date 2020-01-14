import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarCollapse(props) {
    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {props.children}
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default NavbarCollapse;