import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/index";
import Nav from "react-bootstrap/Navbar";
import NavLogin from "../components/NavbarLogin/index";
import Button from "../components/ButtonLink/index"
import "./style.css";

const styleLogin = { color: "#EBC023" }
const styleLink = { color: "#574F44" }
const styleButton = { backgroundColor: "#EBC023", color: "#574F44", fontWeight: "bold" }


function Home() {
    return (
        <div className="home">
            <Navbar>
                <Nav className="ml-auto">
                    <NavLogin style={styleLogin} />
                </Nav>
            </Navbar>
            <Jumbotron />
            <h6 className="text-center text-white px-5 homeText">Have a campground reservation with extra spots you won't use?</h6>
            <h6 className="text-center text-white px-5 homeText my-3">Have a National Park in mind to go camping, but all spots are already full?</h6>
            <h5 className="text-center text-white px-5 homeText">Find like-minded people to share a campsite with!</h5>
            <div className="text-center mt-5">
                <Button link="/signup" name="START NOW" style={styleButton} styleLink={styleLink}/>
            </div>
        </div>
    );
}

export default Home;