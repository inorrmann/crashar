import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Jumbo() {
    return (
        <Jumbotron className="m-5 text-center" style={{
            backgroundColor: "rgba(48, 44, 38, .3)",
            color: "#EBC023",
            boxShadow: "0 0 20px #302C26",
            textShadow: "0 0 10px #302C26",
        }}>
            <h2 className="mb-3">Tent Crashing</h2>
            <h6>Building a camping community <br></br> one stake at a time</h6>
        </Jumbotron>
    )
}

export default Jumbo;