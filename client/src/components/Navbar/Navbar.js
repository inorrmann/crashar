import React from 'react';
import Navbar from "react-bootstrap/Navbar";


function NavBar(props) {
  return (
    <Navbar className={props.class} style={props.style}>
      {props.children}
    </Navbar>
  )
}

export default NavBar;