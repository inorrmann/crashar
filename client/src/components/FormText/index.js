import React from "react";
import Form from "react-bootstrap/Form";

function FormText(props) {
    return (
        <Form.Text className="text-center pb-2" style={props.style} >{props.text}</Form.Text>
    )
}

export default FormText;