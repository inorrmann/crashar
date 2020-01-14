import React from "react";
import ButtonToolbar from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";

function ButtonSubmit(props) {
    return (
        <ButtonToolbar className="bg-transparent border-0">
            <Button className="border-0 py-2 px-3" type="submit" style={props.style} >{props.name}</Button>
        </ButtonToolbar>
    )
}

export default ButtonSubmit;