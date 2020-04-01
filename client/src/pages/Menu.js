import React from 'react';
import { useAuth } from '../utils/auth';
import Navbar from "../components/Navbar/Navbar";
import NavLogin from "../components/NavbarLogin/index";
import NavLink from "../components/NavLink/index";
import Button from "../components/ButtonLink/index";
import "./style.css"

function Menu() {
  const { user } = useAuth();

  const styleLogin = { color: "#EBC023", textShadow: "0 0 15px #0F0E0C" }
  const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px #302C26" }
  const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .2)" }
  const styleButton = { backgroundColor: "#4D453C", width: "70%" }
  const styleButtonLink = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px #0F0E0C" }

  return (
    <div className="menu overflow-auto">
        <Navbar style={styleNavbar}>
          <NavLink link={`/messages/all/${user.id}`} styleLink={styleLink} name="Messages" />
          <div className="ml-auto">
            <NavLogin style={styleLogin} />
          </div>
        </Navbar>
      <div className="menuTop">
        <div className="shareButtons">
          <h1 className="display-4 text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 20px #0F0E0C" }}>Share</h1>
          <div className="menuButton text-center">
            <Button
              style={styleButton}
              link="/sites/new"
              styleLink={styleButtonLink}
              name="SHARE A CAMPSITE"
            />
          </div>
          <div className="menuButton text-center my-2">
            <Button
              style={styleButton}
              link={`/sites/all/${user.id}`}
              styleLink={styleButtonLink}
              name="SEE MY SHARED CAMPSITES"
            />
          </div>
        </div>
      </div>

      <div className="menuBottom">
        <h4 className="text-center mt-3" style={{ fontFamily: "Barlow", fontWeight: "bold", color: "#0F0E0C", textShadow: "0 0 20px #FFF8D5" }}>Welcome {user.name}!</h4>
        <div className="crashButton">
          <h1 className="display-4 text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 12px rgba(15, 14, 12, 0.9)" }}>Crash</h1>
          <div className="menuButton text-center">
            <Button
              style={styleButton}
              link="/sites/search"
              styleLink={styleButtonLink}
              name="FIND OPEN CAMPSITES"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;