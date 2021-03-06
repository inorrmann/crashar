import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "../utils/API";
import CardDeck from "react-bootstrap/CardDeck";
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import Loading from "../components/Loading/index";
import Cards from "../components/Card/index";
import CardBody from "../components/CardBody/index";
import CardTitle from "../components/CardTitle/index";
import CardLink from "../components/CardLink/index";
import CardSubDate from "../components/CardSubDate";
import CardSite from "../components/CardSite";
import ButtonLink from "../components/ButtonLink";
import NavBrand from "../components/NavbarBrandDk";



function Results() {
    const { user } = useAuth()

    const [isLoading, setIsLoading] = useState(true);
    const [selectedCamp, setSelectedCamp] = useState([])
    const [otherCamps, setOtherCamps] = useState([])

    // extract the parameters from the browser
    const { search } = useLocation();

    // get urls search params object
    const queryParams = new URLSearchParams(search)
    // create a plain object to pass to api util
    const query = {}
    for (let [key, value] of queryParams.entries()) {
        query[key] = value
    }

    useEffect(() => {
        API.findOpenSites(query)
            .then(res => {
                let selected = [];
                let others = []
                res.data.map(site => {
                    let arrivalPretty = `${site.arrival.slice(5, 7)}/${site.arrival.slice(8, 10)}/${site.arrival.slice(0, 4)}`
                    site.arrival = arrivalPretty
                    let departurePretty = `${site.departure.slice(5, 7)}/${site.departure.slice(8, 10)}/${site.departure.slice(0, 4)}`
                    site.departure = departurePretty
                    if (site.createdBy !== user.id) {
                        if (site.campground === query.campground) {
                            selected.push(site)
                        }
                        else { others.push(site) }
                    }
                })
                setSelectedCamp(selected);
                setOtherCamps(others);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.response.status === 404) {
                    setIsLoading(false);
                }
                console.log(err)
            })

    }, [])


    const styleLink = { color: "#302C26", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px #FFF8D5" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px #FFF8D5", backgroundColor: "rgba(255, 248, 213, .3)" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }
    const styleBtn = { backgroundColor: "#EBC023", color: "#302C26", }
    const styleButtonLink = { color: "#302C26", fontSize: "1.2rem" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26" }


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="results overflow-auto">
            <Navbar style={styleNavbar}>
                <NavBrand style={{ paddingLeft: "0.5rem" }} />
                <div className="ml-auto">
                    <NavLink link="/sites/search" styleLink={styleLink} name="New Search" />
                </div>
            </Navbar>
            <br />
            {(selectedCamp[0] || otherCamps[0]) && <h1 className="text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 20px #0F0E0C" }}>Open Campsites</h1>}
            {!selectedCamp[0] && !otherCamps[0] &&
                <>
                    <br />
                    <br />
                    <h2 className="text-center mx-5" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 20px #0F0E0C" }}>Sorry, no campsites matched your search criteria</h2>
                    <br />
                    <br />
                    <div className="text-center">
                        <ButtonLink link="/sites/search" style={styleButton} styleLink={styleButtonLink} name="NEW SEARCH" />
                    </div>
                </>}
            <br />
            <br />
            {/* render header only if there are active sites */}
            {selectedCamp[0] && <h3 className="font-weight-bold ml-3 text-center" style={headers}>{query.campground}</h3>}
            {!selectedCamp[0] && otherCamps[0] && <h3 className="font-weight-bold ml-3 text-center" style={headers}>No open sites found at {query.campground}</h3>}

            <div className="d-flex justify-content-center">
                <CardDeck>
                    {selectedCamp.map(selected => (
                        <Cards className="mt-3 shadow" key={selected._id}>
                            <CardBody className="p-3">
                                <CardTitle title={selected.campground} />
                                <CardSubDate className="mb-4 text-muted" arrival={selected.arrival} departure={selected.departure} />
                                <div className="d-flex flex-row justify-content-between">
                                    <CardSite people={selected.people} tents={selected.tents} cars={selected.cars} />
                                    <CardLink styleBtn={styleBtn} to={`/sites/detail/${selected._id}`} label="See More" />
                                </div>
                            </CardBody>
                        </Cards>
                    ))}
                </CardDeck>
            </div>

            <hr></hr>
            {otherCamps[0] && <h3 className="font-weight-bold text-center pt-3" style={headers}>Other Campgrounds</h3>}

            <div className="d-flex mb-4 justify-content-center">
                <CardDeck>
                    {otherCamps.map(other => (
                        <Cards className="mt-3 shadow" key={other._id}>
                            <CardBody className="p-3">
                                <CardTitle title={other.campground} />
                                <CardSubDate className="mb-4 text-muted" arrival={other.arrival} departure={other.departure} />
                                <div className="d-flex flex-row justify-content-between">
                                    <CardSite people={other.people} tents={other.tents} cars={other.cars} />
                                    <CardLink styleBtn={styleBtn} to={`/sites/detail/${other._id}`} label="See More" />
                                </div>
                            </CardBody>
                        </Cards>
                    ))}
                </CardDeck>
            </div>

        </div>
    )
}

export default Results;