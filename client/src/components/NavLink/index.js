import React from 'react';
import { Link } from 'react-router-dom';

function NavLink(props) {
    return (
        <Link to={props.link} style={props.styleLink}> {props.name} </Link>
    );
}

export default NavLink;