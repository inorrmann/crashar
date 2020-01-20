import React from "react";
import Card from "react-bootstrap/Card";

function CardSubtitle(props) {
    return (
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
    )
}

export default CardSubtitle;