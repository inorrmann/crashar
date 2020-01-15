import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Jumbo() {
    return (
        <Jumbotron className="m-5 text-center shadow" style={{
            backgroundColor: "rgba(15, 14, 12, .3)",
            color: "#EBC023",
            textShadow: "0 0 10px #302C26",
        }}>
            <h2 className="mb-3">Tent Crashing</h2>
            <h6 style={{ fontFamily: "Barlow" }}>Building a camping community <br></br> one stake at a time</h6>
        </Jumbotron>
    )
}

export default Jumbo;