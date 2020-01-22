import React from "react";
import Button from "react-bootstrap/Button";

function ButtonOnClick(props) {
    return (
        <Button className="border-0 py-2 px-3 shadow" onClick={props.onClick} style={props.style} >{props.submitName}</Button>
    )
}

export default ButtonOnClick;