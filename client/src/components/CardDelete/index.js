import React from "react";
import Card from "react-bootstrap/Card";

function CardDelete(props) {
    return (
        <Card.Text className="d-inline " >
            <span className="p-2 rounded shadow mb-0" onClick={props.onClick} role="button" style={props.styleBtn}
            >{props.label}</span>
        </Card.Text>
    )
}

export default CardDelete;