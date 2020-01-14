import React from "react";
import Navbar from "../components/Navbar/index";
// import NavbarCollapse from "../components/NavbarCollapse/index";
import NavbarLink from "../components/NavbarLink/index";
import "./Pages.css";
import Jumbotron from "../components/Jumbotron/index";
import Nav from "react-bootstrap/Navbar";
import Button from "../components/ButtonLink/index";

const styleLink = { color: "#EBC023", textShadow: "0 0 6px #302C26" }
const styleButton = { backgroundColor: "#EBC023", color: "#574F44", fontWeight: "bold" }

function Home() {
    return (
        <div className="home">
            <Navbar>
                <Nav className="ml-auto">
                    <NavbarLink link="/login" navTag="Login" style={styleLink} />
                </Nav>
            </Navbar>
            <Jumbotron />
            <h6 className="text-center text-white px-5 homeText">Have a campground reservation with extra spots you won't use?</h6>
            <h6 className="text-center text-white px-5 homeText my-3">Have a National Park in mind to go camping, but all spots are already full?</h6>
            <h5 className="text-center text-white px-5 homeText">Find like-minded people to share a campsite with!</h5>
            <div className="text-center mt-5">
                <Button link="/signup" name="START NOW" style={styleButton} />
            </div>
        </div>
    );
}

export default Home;