import React from "react";
import Form from "react-bootstrap/Form";

function FormGroup(props) {
    return (
        <Form.Group controlId={props.controlId}>
            {props.children}
        </Form.Group>
    )
}

export default FormGroup;