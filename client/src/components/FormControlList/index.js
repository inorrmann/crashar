import React from "react";
import Form from "react-bootstrap/Form";


function FormControlList(props) {
    return (
        <Form.Control
            className="shadow"
            placeholder={props.placeholder}
            name={props.name}
            id={props.name}
            list={props.list}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        >
        </Form.Control>
    )
}

export default FormControlList;

