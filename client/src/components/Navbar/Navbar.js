import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";


const createLink = ({ text, to, ...rest }) => {
  const className = 'nav-link';
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
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

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  let links = [];
  if (isLoggedIn) {
    links.push({ text: 'Profile', to: '/profile' });
    links.push({ text: 'Logout', onClick: () => logout() });
  } else {
    links.push({ text: 'Signup', to: '/signup' });
    links.push({ text: 'Login', to: '/login' });
  }
  return (
    <ul className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}


function NavBar(props) {
  return (
    <Navbar style={{ fontFamily: "Roboto", fontSize: "1.2rem", color: "#EBC023"}}>
      {props.children}
      {/* <NavLinks  /> */}
    </Navbar>
  )
}

export default NavBar;