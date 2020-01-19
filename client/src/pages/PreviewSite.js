import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams, useLocation } from "react-router-dom";
import "./style.css";
import Loading from "../components/Loading/index";
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import ButtonLink from "../components/ButtonLink/index";
import picture from "./images/single-tent-blue.jpg";


function PreviewSite() {
    // const [isLoading, setIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [sharedSite, setSharedSite] = useState({})

    const { pathname } = useLocation();
    // const { id } = useParams();
    let id = pathname.split("/")[3]
    // console.log(id)

    useEffect(() => {
        // console.log(id)
        API.getSharedSite(id)
            .then(res => {
                console.log(res)
                // setSharedSite(res);
                // setIsLoading(false)
            })
            .catch(err => console.log(err))
    })


    const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px #302C26" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .4)" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }
    const textshadow = { color: "#EBC023", textShadow: "0 0 10px #302C26", backgroundColor: "rgba(15, 14, 12, .4)" }


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="preview-site overflow-auto">

            <Navbar style={styleNavbar}>
                <NavLink link="/signup" styleLink={styleLink} name="Main Menu" />
                <div className="ml-auto">
                    <NavLink link="/signup" styleLink={styleLink} name="Return to Spots" />
                </div>
            </Navbar>
            <div className="topImage" style={{ backgroundImage: `url(${picture})` }}>
                <div className="py-5">
                    <h4 className="text-center font-weight-bold mt-3 mx-3 text-wrap" style={textshadow}>Potwisha Campground</h4>
                    <h6 className="text-center font-weight-bold m-3 text-wrap" style={textshadow}>Sequoia and Kings Canyon National Park</h6>
                    <br></br>
                    <h5 className="text-center font-weight-bold m-3 text-wrap" style={textshadow}>Site 40, Loop B</h5>
                </div>
            </div>
            <div className="text-light text-center">
                <h5 className="mt-4 mb-3">Cost per night $8</h5>

                <div className="d-flex flex-row justify-content-between m-4">
                    <h4 className="text-justify d-inline">3 <i className="fas fa-user"></i></h4>
                    <h4 className="text-justify d-inline">2 <i className="fas fa-campground"></i></h4>
                    <h4 className="text-justify d-inline">0 <i className="fas fa-car-alt"></i></h4>
                    <h4 className="text-justify d-inline align-baseline">YES <i className="fas fa-wheelchair"></i></h4>
                </div>

                <div className="d-flex flex-row justify-content-between m-4">
                    <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>From: 01/26/2020</h5>
                    <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>Until: 01/28/2020</h5>
                </div>

                <h6 className="mt-4 text-center" style={{ fontSize: "1.1rem" }}>PREFERENCES:</h6>
                <div className="d-flex flex-row justify-content-between mx-4">
                    <h6 className="text-center d-inline3">YES Children</h6>
                    <h6 className="text-center d-inline">NO Partiers</h6>
                    <h6 className="text-center d-inline">YES Pets</h6>
                    <h6 className="text-center d-inline">YES Smokers</h6>
                    <h6 className="text-center d-inline">NO Drinkers</h6>
                </div>

                <h6 className="text-center mt-4" style={{ fontSize: "1.1rem" }}>ABOUT THE CAMPERS:</h6>
                <h6 className="text-justify px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
            </div>
            <div className="text-center mt-4">
                <ButtonLink style={styleButton} styleLink={styleButton} name="CONTACT CAMPERS" />
                <hr></hr>
                <p className="text-muted mb-3">Data Source: ridb.recreation.gov</p>
            </div>
        </div>

    )
}

export default PreviewSite;