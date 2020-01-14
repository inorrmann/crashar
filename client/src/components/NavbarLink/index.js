import React from "react";
import Nav from "react-bootstrap/Nav";

function NavLink(props) {
    // return <Nav.Link href={props.link} style={props.style} className="mx-3 float-right">{props.navTag} </Nav.Link>
    return <Nav.Link href={props.link} style={props.style} >{props.navTag} </Nav.Link>
}

export default NavLink;