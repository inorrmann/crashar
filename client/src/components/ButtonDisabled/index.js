import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

function ButtonDisabled(props) {
    return (
            <Button className="border-0 py-2 px-3 shadow" style={props.style}>
                <span style={props.styleLink}> {props.name} </span>
            </Button>
    )
}

export default ButtonDisabled;