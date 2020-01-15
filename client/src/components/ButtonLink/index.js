import React from "react";
import { Link } from "react-router-dom";
import ButtonToolbar from "react-bootstrap/Button";
import Button from "react-bootstrap/Button"

function ButtonLink(props) {
    return (
        <ButtonToolbar className="bg-transparent border-0">
            <Button className="border-0 py-2 px-3 shadow" style={props.style}>
                <Link to={props.link} style={props.styleLink}> {props.name} </Link>
            </Button>
        </ButtonToolbar>
    )
}

export default ButtonLink;