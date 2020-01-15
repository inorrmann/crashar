import React from "react";
import Button from "react-bootstrap/Button";

function ButtonSubmit(props) {
    return (
        <Button className="border-0 py-2 px-3 shadow" type="submit" style={props.style} >{props.name}</Button>
    )
}

export default ButtonSubmit;