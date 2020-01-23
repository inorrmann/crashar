import React from "react";
import Card from "react-bootstrap/Card";

function CardSubDate(props) {
    return (
        <Card.Subtitle className={props.className} style={{ fontSize: "0.9rem" }}>
            From: {props.arrival} <span>&emsp;</span>To: {props.departure}
        </Card.Subtitle>
    )
}

export default CardSubDate;