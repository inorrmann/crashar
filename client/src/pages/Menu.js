import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import Navbar from "../components/Navbar/Navbar";
import NavLogin from "../components/NavbarLogin/index";
import NavLink from "../components/NavLink/index";
import Button from "../components/ButtonLink/index";
import "./style.css"

function Menu() {
  const { user } = useAuth();
  // const { user, logout } = useAuth();
  // const history = useHistory();

  // const goToEditProfsile = () => history.push('/profile');

  const styleLogin = { color: "#EBC023" }
  const styleLink = { color: "#EBC023", fontSize: "2rem", paddingLeft: ".5rem", textShadow: "0 0 10px #302C26" }
  const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .4)" }
  const styleButton = { backgroundColor: "#574F44", width: "60%" }
  const styleButtonLink = { color: "#EBC023", fontWeight: "bold" }

  return (
    <div className="menu">
      <div className="menuTop">

        <Navbar style={styleNavbar}>
          <NavLink link="/messages/:id" styleLink={styleLink} name={<i className="fas fa-envelope"></i>} />
          <div className="ml-auto">
            <NavLogin style={styleLogin} />
          </div>
        </Navbar>
        <br></br>
        <br></br>
        <h1 className="display-4 text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 10px #302C26" }}>Share</h1>
        <div className="text-center">
          <Button
            style={styleButton}
            link="/sites/new"
            styleLink={styleButtonLink}
            name="SHARE A SITE"
          />
        </div>
        <div className="text-center my-2">
          <Button
            style={styleButton}
            link="/sites/:id"
            styleLink={styleButtonLink}
            name="SEE MY SHARED SITES"
          />
        </div>
      </div>

      <div className="menuBottom">
        <h4 className="text-center mt-3" style={{ fontFamily: "Barlow", fontWeight: "bold", color: "#302C26", textShadow: "0 0 20px #FFF8D5" }}>Welcome {user.name}!</h4>
        <br></br>
        <h1 className="display-4 text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 10px #302C26" }}>Crash</h1>
        <div className="text-center">
          <Button
            style={styleButton}
            link="/sites/search"
            styleLink={styleButtonLink}
            name="FIND AN OPEN SITE"
          />
        </div>
      </div>

      {/* <p className="App-intro">
        <button
          type="button"
          className="btn btn-primary"
          onClick={goToEditProfile}
        >
          Go to Profile
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => logout()}
        >
          Logout
        </button>
      </p> */}
    </div>
  );
}

export default Menu;