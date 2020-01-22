import React from 'react';
import Form from 'react-bootstrap/Form';

function Forms(props) {
    return (
        <Form 
        className="mt-4 mx-4 shadow"
        onSubmit={props.onSubmit}>
            {props.children}
        </Form>
    )
}

export default Forms;