import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

function CardLink(props) {
    return(
        <Card.Text className="d-inline mb-0"><Link className="p-2 rounded shadow" style={props.styleBtn} to={props.to}>{props.label} </Link></Card.Text>
    )
}

export default CardLink;