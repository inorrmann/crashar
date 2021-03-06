import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "../utils/API";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar/Navbar";
import NavLogin from "../components/NavbarLogin/index";
import Loading from "../components/Loading/index";
import Cards from "../components/Card/index";
import CardBody from "../components/CardBody/index";
import CardTitle from "../components/CardTitle/index";
import CardSubDate from "../components/CardSubDate";
import CardLink from "../components/CardLink/index";
import CardText from "../components/CardText";
import ButtonLink from "../components/ButtonLink";
import NavBrand from "../components/NavbarBrand"


function MessageBoard() {
    const [isLoading, setIsLoading] = useState(true);
    const [sharingSites, setSharingSites] = useState([]);
    const [crashingSites, setCrashingSites] = useState([]);


    const { pathname } = useLocation();
    let id = pathname.split("/")[3]

    // use userID to compare with siteOwner/siteGuest
    const { user } = useAuth();
    const userID = user.id

    useEffect(() => {
        API.findCrashMessages(userID)
            .then(res => {
                setCrashingSites(res.data)
            })
            .catch(err => console.log(err))
            .then(res =>
                API.findShareMessages(userID)
                    .then(res => setSharingSites(res.data))
                    .catch(err => console.log(err)))
            .then(res =>
                setIsLoading(false))
    }, []);


    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .2)" }
    const styleLogin = { color: "#EBC023" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }
    const noMsgHeader = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .3)" }
    const styleBtn = { backgroundColor: "#EBC023", color: "#302C26", }
    const styleLinkBtn = { color: "#302C26", fontSize: "1.2rem" }


    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="message-board overflow-auto">
            <Navbar style={styleNavbar}>
                <NavBrand style={{paddingLeft: "0.5rem"}}/>
                <div className="ml-auto">
                    <NavLogin style={styleLogin} />
                </div>
            </Navbar>
            <br></br>

            {!sharingSites[0] && !crashingSites[0] &&
                <>
                    <br />
                    <h3 className="text-center font-weight-bold m-4 py-3" style={noMsgHeader}>You have no messages</h3>
                    <br />
                    <div className="text-center mb-4">
                        <ButtonLink link="/signup" style={styleBtn} styleLink={styleLinkBtn} name="GO BACK" />
                    </div>
                </>}

            {/* render header only if there are messages for shared sites */}
            {sharingSites[0] && <h3 className="font-weight-bold text-center" style={headers}>Shared Campsites</h3>}
            <Container>
                <Row className="d-flex justify-content-center">
                    {sharingSites.map(share => {
                        let arrival = `${share.arrival.slice(5, 7)}/${share.arrival.slice(8, 10)}/${share.arrival.slice(0, 4)}`
                        let departure = `${share.departure.slice(5, 7)}/${share.departure.slice(8, 10)}/${share.departure.slice(0, 4)}`
                        let name = "Waiting for a reply";
                        share.messages.map(msg => {
                            if (msg.authorName !== user.name) {
                                return name = msg.authorName
                            }
                        })
                        return (
                            <Cards className="m-3 shadow" key={share._id}>
                                <CardBody className="p-3">
                                    <CardTitle title={share.campground} />
                                    <CardSubDate className="mb-2 text-muted" arrival={arrival} departure={departure} />
                                    <CardText text={`Crasher: ${name}`} />
                                    <div className="d-flex justify-content-end">
                                        <CardLink styleBtn={styleBtn} to={`/messages/${share._id}`} label="Open" />
                                    </div>
                                </CardBody>
                            </Cards>
                        )
                    })}
                </Row>
            </Container>
            <br />
            <hr/>
            {/* render header only if there are active sites */}
            {crashingSites[0] && <h3 className="font-weight-bold text-center" style={headers}>Crashed Campsites</h3>}
            <Container>
                <Row className="d-flex justify-content-center">
                    {crashingSites.map(share => {
                        let arrival = `${share.arrival.slice(5, 7)}/${share.arrival.slice(8, 10)}/${share.arrival.slice(0, 4)}`
                        let departure = `${share.departure.slice(5, 7)}/${share.departure.slice(8, 10)}/${share.departure.slice(0, 4)}`
                        let name = "Waiting for a reply";
                        share.messages.map(msg => {
                            if (msg.authorName !== user.name) {
                                return name = msg.authorName
                            }
                        })
                        return (
                            <Cards className="m-3 shadow" key={share._id}>
                                <CardBody className="p-3">
                                    <CardTitle title={share.campground} />
                                    <CardSubDate className="mb-2 text-center" arrival={arrival} departure={departure} />
                                    <CardText text={`Sharer: ${name}`} />
                                    <div className="d-flex justify-content-end">
                                        <CardLink styleBtn={styleBtn} to={`/messages/${share._id}`} label="Open" />
                                    </div>
                                </CardBody>
                            </Cards>
                        )
                    })}
                </Row>
            </Container>
        </div >
    )
}

export default MessageBoard;
