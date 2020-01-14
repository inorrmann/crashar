import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavbarBrand(props) {
    return (
        <Navbar.Brand className="font-weight-bold" style={props.style}>TENT CRASHING</Navbar.Brand >
    //     <Navbar.Brand>
    //         <img
    //     src="../../pages/images/tent-placeholder-logo.jpg"
    //     width="30"
    //     height="30"
    //     className="d-inline-block align-top"
    //     alt="React Bootstrap logo"
    //   />
    //     </Navbar.Brand >
    )
}

export default NavbarBrand;