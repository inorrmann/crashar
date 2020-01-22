import React from "react";
import Button from "react-bootstrap/Button"

function NavButton(props) {
    return (
<Button variant="link" style={props.styleNavBtn} onClick={props.onClick}>{props.btnName}</Button>
)}

export default NavButton;