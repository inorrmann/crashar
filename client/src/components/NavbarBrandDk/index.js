import React from "react";
import { Link } from "react-router-dom";
import logo from "../../pages/images/logo-brown.png"


function Brand(props) {
    return (
        <Link className="navbar-brand" style={props.style} to="/">
            <img src={logo} style={{ width: "160px" }} />
        </Link>
    )
}

export default Brand;