import React from "react";
import Form from "react-bootstrap/Form";


function FormControlList({name, ...rest}) {
    return (
        <Form.Control
            className="shadow rounded-right"
            name={name}
            id={name}
            {...rest}
        >
        </Form.Control>
    )
}

export default FormControlList;

