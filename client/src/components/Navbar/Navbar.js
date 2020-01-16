import React from 'react';
import Navbar from "react-bootstrap/Navbar";


function NavBar(props) {
  return (
    // <Navbar style={{ fontFamily: "Roboto", fontSize: "1.2rem"}}>
    <Navbar className={props.class} style={props.style}>
      {props.children}
    </Navbar>
  )
}

export default NavBar;