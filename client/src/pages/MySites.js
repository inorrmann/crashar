import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns"
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import NavLogin from "../components/NavbarLogin/index";
import Loading from "../components/Loading/index";


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
    }, []);


    const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px black" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .2)" }
    // const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .1)" }
    const styleLogin = { color: "#EBC023" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }


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
                                <Card className="mt-3" style={{ width: '18rem' }}>
                                <Card.Body className="p-3">
                                    <Card.Title>{future.campground}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{future.park}</Card.Subtitle>
                                    <Card.Text style={{ fontSize: "0.9rem" }}>
                                        From: {future.arrival} <span>&emsp;</span>To: {future.departure}
                                    </Card.Text>
                                    <div className="d-flex flex-row justify-content-between">
                                        <Card.Text className="d-inline mb-0"><Link className="text-dark" to={`/sites/preview/${future._id}`}> Preview </Link></Card.Text>
                                        <Card.Text className="d-inline mb-0"><Link className="text-dark" to={`/sites/edit/${future._id}`}> Edit Post </Link></Card.Text>
                                        <Card.Text className="d-inline mb-0"><Link className="text-danger" to={""}> Delete </Link></Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardColumns>
                </div>

                <hr></hr>
                {/* render header only if there are expired sites */}
                {pastSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Expired Sites</h3>}

                <div className="d-flex justify-content-center">
                    <CardColumns>
                        {pastSites.map(past => (
                            <Card className="mt-3" style={{ width: '18rem' }}>
                                <Card.Body className="p-3">
                                    <Card.Title>{past.campground}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{past.park}</Card.Subtitle>
                                    <Card.Text style={{ fontSize: "0.9rem" }}>
                                        From: {past.arrival} <span>&emsp;</span>To: {past.departure}
                                    </Card.Text>
                                    <Card.Text className="d-inline mb-0"><Link className="text-dark" to={`/sites/preview/${past._id}`}> Preview </Link></Card.Text>
                                </Card.Body>
                            </Card>))}
                    </CardColumns>
                </div>
            </div>

        )
    }
}

export default MySites;