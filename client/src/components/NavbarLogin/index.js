import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/auth';


const createLink = ({ text, to, style, ...rest }) => {
    const className = 'nav-link';
    if (to) {
        return (
            <Link className={className} to={to} {...rest} style={style}>
                {text}
            </Link>
        );
    }
    return (
        <span
            role="button"
            className={className}
            style={{ cursor: 'pointer' }}
            {...rest}
        >
            {text}
        </span>
    );
};

function NavLog(props) {
    const { isLoggedIn, logout } = useAuth();
    let link = [];
    if (isLoggedIn) {
        link = { text: 'Logout', onClick: () => logout(), style: props.style };
    } else {
        link = { text: 'Login', to: '/login', style: props.style };
    }
    return (
        <ul className="navbar-nav">
            <li className="nav-item" >
                {createLink(link)}
            </li>
        </ul>
    );
}

export default NavLog;
