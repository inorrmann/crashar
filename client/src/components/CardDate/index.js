import React from "react";
import Card from "react-bootstrap/Card";

function CardDate(props) {
    return (
        <Card.Text style={{ fontSize: "0.9rem" }}>
            From: {props.arrival} <span>&emsp;</span>To: {props.departure}
        </Card.Text>
    )
}

export default CardDate;