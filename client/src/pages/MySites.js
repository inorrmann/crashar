import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns"
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import NavLogin from "../components/NavbarLogin/index";
import Loading from "../components/Loading/index";
import Cards from "../components/Card/index";
import CardBody from "../components/CardBody/index";
import CardTitle from "../components/CardTitle/index";
import CardSubtitle from "../components/CardSubtitle/index";
import CardDate from "../components/CardDate/index";
import CardLink from "../components/CardLink/index";
import CardDelete from "../components/CardDelete/index";


function MySites() {
    const [isLoading, setIsLoading] = useState(true);
    // const [allSites, setAllSites] = useState([]);
    const [pastSites, setPastSites] = useState([]);
    const [futureSites, setFutureSites] = useState([]);


    const { pathname } = useLocation();
    let id = pathname.split("/")[3]

    // find current date to compared with shared sites to determine
    // active and expired posts
    var date = new Date();
    let month = `0${date.getMonth() + 1}`.slice(-2)
    var currentDate = `${date.getFullYear()}-${month}-${date.getDate()}`
    // console.log(currentDate)

    useEffect(() => {
        loadSites(id);
    }, []);

    function loadSites(id) {
        API.getAllSharedSites(id)
            .then(res => {
                // setAllSites(res.data)
                console.log(res.data)
                let past = [];
                let future = [];

                res.data.map(post => {
                    // extra formatted date to compare with current date for active/expired sites
                    let date = post.arrival.slice(0, 10)
                    // reformat dates for display on cards
                    let arrivalPretty = `${post.arrival.slice(5, 7)}/${post.arrival.slice(8, 10)}/${post.arrival.slice(0, 4)}`
                    let departurePretty = `${post.departure.slice(5, 7)}/${post.departure.slice(8, 10)}/${post.departure.slice(0, 4)}`
                    if (date > currentDate) {
                        post.arrival = arrivalPretty
                        post.departure = departurePretty
                        future.push(post)
                    } else if (date <= currentDate) {
                        post.arrival = arrivalPretty
                        post.departure = departurePretty
                        past.push(post)
                    }
                })
                setFutureSites(future);
                setPastSites(past);

                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }

    function deleteSite(siteId) {
        API.deleteSite(siteId)
            .then(res => loadSites(id))
            .catch(err => console.log(err))
    }


    const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px black" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .2)" }
    const styleLogin = { color: "#EBC023" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }
    const styleBtn = { backgroundColor: "#EBC023", color: "#302C26", }
    const styleDel = { backgroundColor: "#9E273A", color: "#FFEAC9" }

    if (isLoading) {
        return <Loading />
    }
    else {
        return (
            <div className="my-sites overflow-auto">
                <Navbar style={styleNavbar}>
                    <NavLink link="/signup" styleLink={styleLink} name="Main Menu" />
                    <div className="ml-auto">
                        <NavLogin style={styleLogin} />
                    </div>
                </Navbar>
                <br></br>
                {/* render header only if there are active sites */}
                {futureSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Active Sites</h3>}

                <div className="d-flex justify-content-center">
                    <CardColumns>
                        {futureSites.map(future => (
                            <Cards>
                                <CardBody>
                                    <CardTitle title={future.campground} />
                                    <CardSubtitle subtitle={future.park} />
                                    <CardDate arrival={future.arrival} departure={future.departure} />
                                    <div className="d-flex flex-row justify-content-between">
                                        <CardLink styleBtn={styleBtn} to={`/sites/preview/${future._id}`} label="Preview" />
                                        {/* <CardLink styleBtn={styleBtn} to={`/sites/edit/${future._id}`} label="Edit Post" /> */}
                                        <CardDelete styleBtn={styleDel} label="Delete" onClick={() => deleteSite(future._id)}/>
                                    </div>
                                </CardBody>
                            </Cards>
                        ))}
                    </CardColumns>
                </div>

                <hr></hr>
                {/* render header only if there are expired sites */}
                {pastSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Expired Sites</h3>}

                <div className="d-flex justify-content-center">
                    <CardColumns>
                        {pastSites.map(past => (
                            <Cards>
                                <CardBody>
                                    <CardTitle title={past.campground} />
                                    <CardSubtitle subtitle={past.park} />
                                    <CardDate arrival={past.arrival} departure={past.departure} />
                                    <CardLink styleBtn={styleBtn} to={`/sites/preview/${past._id}`} label="Preview" />
                                </CardBody>
                            </Cards>
                        ))}
                    </CardColumns>
                </div >
            </div >

        )
    }
}

export default MySites;