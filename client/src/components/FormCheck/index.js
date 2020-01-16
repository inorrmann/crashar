import React from "react";
import Form from "react-bootstrap/Form";

function FormCheck(props) {
    return (
        <Form.Check
            custom
            type="switch"
            id={props.id}
            label={props.label}
            className="pt-2"
            onChange={props.onClick}
            name={props.name}
        />
    )
}

export default FormCheck;