import React from "react";
import Form from "react-bootstrap/Form";

function FormRow(props) {
    return (
    <Form.Row>{props.children}</Form.Row>
    )
}

export default FormRow;