import React from 'react';
import Navbar from "react-bootstrap/Navbar";


function NavBar(props) {
  return (
    <Navbar style={{ fontFamily: "Roboto", fontSize: "1.2rem"}}>
      {props.children}
    </Navbar>
  )
}

export default NavBar;