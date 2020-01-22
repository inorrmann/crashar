import React from "react";
import Card from "react-bootstrap/Card"

function CardText(props) {
    return (
    <Card.Text style={props.styleText}>{props.text}</Card.Text>
    )
}

export default CardText;


