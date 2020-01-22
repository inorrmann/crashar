import React from "react";
import Card from "react-bootstrap/Card";

function CardBody(props) {
    return (
        <Card.Body className={props.cardName} style={props.styleBody}>
            {props.children}
            </Card.Body>
    )
}

export default CardBody;