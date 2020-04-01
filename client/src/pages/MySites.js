import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../utils/API";
import CardDeck from "react-bootstrap/CardDeck";
import Navbar from "../components/Navbar/Navbar";
import NavBrand from "../components/NavbarBrandDk";
import NavLogin from "../components/NavbarLogin/index";
import Loading from "../components/Loading/index";
import Cards from "../components/Card/index";
import CardBody from "../components/CardBody/index";
import CardTitle from "../components/CardTitle/index";
import CardSubtitle from "../components/CardSubtitle/index";
import CardDate from "../components/CardDate/index";
import CardLink from "../components/CardLink/index";
import CardDelete from "../components/CardDelete/index";
import ButtonLink from "../components/ButtonLink";


function MySites() {
    const [isLoading, setIsLoading] = useState(true);
    const [pastSites, setPastSites] = useState([]);
    const [futureSites, setFutureSites] = useState([]);


    const { pathname } = useLocation();
    let id = pathname.split("/")[3]

    // find current date to compare with shared sites to determine
    // active and expired posts
    var date = new Date();
    let month = `0${date.getMonth() + 1}`.slice(-2)
    var currentDate = `${date.getFullYear()}-${month}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`


    useEffect(() => {
        loadSites(id);
    }, []);

    function loadSites(id) {
        API.getAllSharedSites(id)
            .then(res => {
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


    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .2)" }
    const styleLogin = { color: "#302C26" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }
    const notSharedMsg = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .3)" }
    const styleBtn = { backgroundColor: "#EBC023", color: "#302C26", }
    const styleDel = { backgroundColor: "#9E273A", color: "#FFEAC9" }
    const styleLinkBtn = { color: "#302C26", fontSize: "1.2rem" }

    if (isLoading) {
        return <Loading />
    }
    else {
        return (
            <div className="my-sites overflow-auto">
                <Navbar style={styleNavbar}>
                    <NavBrand style={{ paddingLeft: "0.5rem" }} />
                    <div className="ml-auto">
                        <NavLogin style={styleLogin} />
                    </div>
                </Navbar>
                <br></br>
                {!futureSites[0] && !pastSites[0] &&
                    <>
                        <br />
                        <h3 className="font-weight-bold mx-4 text-center p-3" style={notSharedMsg}>You have not shared any campsites yet</h3>
                        <br />
                        <div className="text-center mb-4">
                            <ButtonLink link="/signup" style={styleBtn} styleLink={styleLinkBtn} name="GO BACK" />
                        </div>
                    </>}
                {/* render header only if there are active sites */}
                {futureSites[0] && <h3 className="text-center font-weight-bold ml-3" style={headers}>Active Campsites</h3>}

                <div className="d-flex justify-content-center">
                    <CardDeck>
                        {futureSites.map(future => (
                            <Cards className="mt-3 shadow mx-4" key={future._id}>
                                <CardBody className="p-3">
                                    <CardTitle title={future.campground} />
                                    <CardSubtitle subtitle={future.park} />
                                    <CardDate arrival={future.arrival} departure={future.departure} />
                                    <div className="d-flex flex-row justify-content-between">
                                        <CardLink styleBtn={styleBtn} to={`/sites/preview/${future._id}`} label="Preview" />
                                        <CardDelete styleBtn={styleDel} label="Delete" onClick={() => deleteSite(future._id)} />
                                    </div>
                                </CardBody>
                            </Cards>
                        ))}
                    </CardDeck>
                </div>
                <br/>
                <hr/>
                {/* render header only if there are expired sites */}
                {pastSites[0] && <h3 className="text-center font-weight-bold ml-3" style={headers}>Expired Campsites</h3>}

                <div className="d-flex justify-content-center">
                    <CardDeck>
                        {pastSites.map(past => (
                            <Cards className="mt-3 shadow mx-4" key={past._id}>
                                <CardBody className="p-3">
                                    <CardTitle title={past.campground} />
                                    <CardSubtitle subtitle={past.park} />
                                    <CardDate arrival={past.arrival} departure={past.departure} />
                                    <CardLink styleBtn={styleBtn} to={`/sites/preview/${past._id}`} label="Preview" />
                                </CardBody>
                            </Cards>
                        ))}
                        </CardDeck>
                </div >
            </div >

        )
    }
}

export default MySites;