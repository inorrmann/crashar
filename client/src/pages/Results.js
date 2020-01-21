import React, { useState, useEffect } from "react";
import { useLocation, useQuery } from "react-router-dom";
import API from "../utils/API";
import CardColumns from "react-bootstrap/CardColumns"
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import NavLogin from "../components/NavbarLogin/index";
import Loading from "../components/Loading/index";
import Cards from "../components/Card/index";
import CardBody from "../components/CardBody/index";
import CardTitle from "../components/CardTitle/index";
// import CardSubtitle from "../components/CardSubtitle/index";
// import CardDate from "../components/CardDate/index";
import CardLink from "../components/CardLink/index";
import CardDelete from "../components/CardDelete/index";
import CardSubDate from "../components/CardSubDate";
import CardSite from "../components/CardSite";



function Results() {
    // const [isLoading, setIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCamp, setSelectedCamp] = useState([])
    const [otherCamps, setOtherCamps] = useState([])

    // extract the parameters from the browser
    const {search}  = useLocation();
    
    // get urls search params object
    const queryParams = new URLSearchParams(search)
    // create a plain object to pass to api util
    // transform arrival date so it looks like what's stored in mongoose
    const query = {}
    for (let [key, value] of queryParams.entries()) {
        query[key] = value
    }

    console.log(query)
    useEffect(() => {
        API.findOpenSites(query)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])





    const styleLink = { color: "#302C26", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px #FFF8D5" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px #FFF8D5", backgroundColor: "rgba(255, 248, 213, .3)" }
    const styleText = { align: "left", fontFamily: "Barlow", fontSize: "0.9rem", color: "#EBC023", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .3)" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }
    const styleBtn = { backgroundColor: "#EBC023", color: "#302C26", }



    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="results overflow-auto">
            <Navbar style={styleNavbar}>
                <NavLink link="/signup" styleLink={styleLink} name="Main Menu" />
                <div className="ml-auto">
                    <NavLink link="/sites/search" styleLink={styleLink} name="New Search" />
                </div>
            </Navbar>
            <br />
            <h1 className="text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 20px #0F0E0C" }}>Open Campsites</h1>
            <br />
            <br />
            {/* render header only if there are active sites */}
            {/* {selectedCamp[0] && <h3 className="font-weight-bold ml-3" style={headers}>{query.campground}</h3>} */}
            {<h3 className="font-weight-bold text-center" style={headers}>Potwisha Campground</h3>}

            <div className="d-flex justify-content-center">
                <CardColumns>
                    {/* {selectedCamp.map(selected => ( */}
                    <Cards>
                        <CardBody>
                            <CardTitle title="Potwisha Campground" />
                            <CardSubDate arrival="01/30/2020" departure="02/05/2020" />
                            <div className="d-flex flex-row justify-content-between">
                                <CardSite people="2" tents="1" cars="0" />
                                <CardLink styleBtn={styleBtn} to={`/message/:userId`} label="See More" />
                            </div>
                        </CardBody>
                    </Cards>
                    {/* ))} */}
                </CardColumns>
            </div>

            <hr></hr>
            {<h3 className="font-weight-bold text-center pt-3" style={headers}>Other Campgrounds</h3>}

            <div className="d-flex justify-content-center">
                <CardColumns>
                    {/* {selectedCamp.map(selected => ( */}
                    <Cards>
                        <CardBody>
                            <CardTitle title="Lodgepole Campground" />
                            <CardSubDate arrival="01/30/2020" departure="02/05/2020" />
                            <div className="d-flex flex-row justify-content-between">
                                <CardSite people="2" tents="1" cars="0" />
                                <CardLink styleBtn={styleBtn} to={`/message/:userId`} label="See More" />
                            </div>
                        </CardBody>
                    </Cards>
                    {/* ))} */}
                </CardColumns>
            </div>

        </div>
    )
}

export default Results;