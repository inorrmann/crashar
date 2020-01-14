import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavbarBrand(props) {
    return (
        <Navbar.Brand className="font-weight-bold" style={props.style}>TENT CRASHING</Navbar.Brand >
    )
}

export default NavbarBrand;