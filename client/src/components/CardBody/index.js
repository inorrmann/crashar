import React from "react";
import Card from "react-bootstrap/Card";

function CardBody(props) {
    return (
        <Card.Body className="p-3">
            {props.children}
            </Card.Body>
    )
}

export default CardBody;