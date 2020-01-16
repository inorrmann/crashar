import React from "react";
import Form from "react-bootstrap/Form";


function FormControl(props) {
    return (
        <Form.Control
            className="shadow"
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            id={props.name}
            onChange={props.onChange}
        >
        </Form.Control>
    )
}

export default FormControl;

