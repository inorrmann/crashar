import React from "react";
import { Link } from "react-router-dom";


function Brand(props) {
    return (
        <Link className="navbar-brand" style={props.style} to="/">
            Tent Crashing
        </Link>
    )
}

export default Brand;