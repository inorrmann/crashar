import React from "react";
import Form from "react-bootstrap/Form";


function FormControl(props) {
    return (
        <Form.Control
            className="shadow"
            {...props}
        >
        </Form.Control>
    )
}

export default FormControl;

