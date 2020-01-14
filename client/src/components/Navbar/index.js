import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavBar(props) {
    return (
        <Navbar bg="transparent" expand style={{
            fontFamily: "Roboto", 
            fontSize: "1.2rem", 
            color: "#FF3630"}}>{props.children}</Navbar>
    )
}

export default NavBar;
