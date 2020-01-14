import React from "react";
import ButtonToolbar from "react-bootstrap/Button";
import Button from "react-bootstrap/Button"

function ButtonLink(props) {
    return (
        <ButtonToolbar className="bg-transparent border-0">
            <Button className="border-0 py-2 px-3" style={props.style} href={props.link}>{props.name}</Button>
        </ButtonToolbar>
    )
}

export default ButtonLink;