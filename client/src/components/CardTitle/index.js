import React from "react";
import Card from "react-bootstrap/Card";

function CardTitle(props) {
    return (
        <Card.Title>{props.title}</Card.Title>
    )
}

export default CardTitle;