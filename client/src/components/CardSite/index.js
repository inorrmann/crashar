import React from "react";
import Card from "react-bootstrap/Card";

function CardSite(props) {
    return (
        <div className="d-flex flex-row justify-content-between">
            <Card.Text className="d-inline text-justify" style={{ fontSize: "1rem" }}>
                {props.people} <i className="fas fa-user"></i> 
            </Card.Text>
            <Card.Text className="d-inline text-justify px-3" style={{ fontSize: "1rem" }}>
                {props.tents} <i className="fas fa-campground"></i> 
            </Card.Text>
            <Card.Text className="d-inline text-justify" style={{ fontSize: "1rem" }}>
                {props.cars} <i className="fas fa-car-alt" style={{ fontSize: "1.2rem" }}></i> 
            </Card.Text>
        </div>
    )
}

export default CardSite;