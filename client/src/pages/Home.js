import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NavLogin from "../components/NavbarLogin/index";
import Button from "../components/ButtonLink/index"
import "./style.css";
import logo from "./images/logo-yellow-white.png";
// import logo from "./images/logo-yellow.png";

const styleLogin = { color: "#EBC023", textShadow: "0 0 10px #0F0E0C" }
const styleLink = { fontFamily: "Roboto", color: "#302C26", fontWeight: "bold", paddingRight: "2rem", paddingLeft: "2rem" }
const styleButton = { backgroundColor: "#EBC023" }
const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .3)" }
const classNavbar = "shadow"
const textShadow = { textShadow: "0 0 10px #0F0E0C" }

function Home() {
    return (
        <div className="home">
            <Navbar class={classNavbar} style={styleNavbar}>
                <div className="ml-auto">
                    <NavLogin style={styleLogin} />
                </div>
            </Navbar>
            <div style={{ fontFamily: "Barlow" }}>
                <br />
                <br />
                <img src={logo} className="img-fluid px-5" />
                <h4 className="text-center" style={styleLogin}>Building a camping community one stake at a time</h4>
                <div className="text-center mt-5">
                    <Button link="/signup" name="START NOW" style={styleButton} styleLink={styleLink} />
                </div>
                <br />
                <br />
                <div className="py-2 mx-3" style={{ backgroundColor: "rgba(15, 14, 12, .3)" }}>
                    <h5 className="text-center text-white px-5 homeText" style={textShadow}>Have a campground reservation with room for extra people?</h5>
                    <h5 className="text-center text-white px-5 homeText my-3" style={textShadow}>Want to go camping to a National Park, but all campsites are already full?</h5>
                    <h3 className="text-center text-white px-5 homeText mt-4" style={textShadow}>Find like-minded people to share a campsite with!</h3>
                </div>
            </div>
            {/* <div className="text-center mt-3">
                <Button link="/signup" name="SIGN UP" style={styleButton} styleLink={styleLink} />
            </div> */}
        </div>
    );
}

export default Home;