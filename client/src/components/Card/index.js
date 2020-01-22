import React from "react";
import Card from "react-bootstrap/Card";

function Cards(props) {
    return (
        <Card className={props.className} style={{ width: '18rem' }}>
            {props.children}
        </Card>
    )
}

export default Cards;