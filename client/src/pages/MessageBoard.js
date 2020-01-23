import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "../utils/API";
import CardColumns from "react-bootstrap/CardColumns"
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import NavLogin from "../components/NavbarLogin/index";
import Loading from "../components/Loading/index";
import Cards from "../components/Card/index";
import CardBody from "../components/CardBody/index";
import CardTitle from "../components/CardTitle/index";
import CardSubDate from "../components/CardSubDate";
import CardLink from "../components/CardLink/index";
import CardText from "../components/CardText";


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


    const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px black" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .2)" }
    const styleLogin = { color: "#EBC023" }
    const headers = { color: "#EBC023", fontWeight: "bold", textShadow: "0 0 10px black" }
    const styleBtn = { backgroundColor: "#EBC023", color: "#302C26", }
    const styleDel = { backgroundColor: "#9E273A", color: "#FFEAC9" }

    if (isLoading) {
        return <Loading />
    }
    // else {
    return (
        <div className="message-board overflow-auto">
            <Navbar style={styleNavbar}>
                <NavLink link="/signup" styleLink={styleLink} name="Main Menu" />
                <div className="ml-auto">
                    <NavLogin style={styleLogin} />
                </div>
            </Navbar>
            <br></br>

            {!sharingSites[0] && !crashingSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>You have no messages</h3>}

            {/* render header only if there are messages for shared sites */}
            {sharingSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Shared Campsites</h3>}
            <div className="d-flex justify-content-center">
                <CardColumns>
                    {/* {sharingSites.map(share => ( */}
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
                            <Cards className="mt-3 shadow" key={share._id}>
                                <CardBody className="p-3">
                                    <CardTitle title={share.campground} />
                                    <CardSubDate arrival={arrival} departure={departure} />
                                    <CardText text={`Crasher: ${name}`} />
                                    <div className="ml-auto">
                                        <CardLink styleBtn={styleBtn} to={`/messages/${share._id}`} label="Open" />
                                    </div>
                                </CardBody>
                            </Cards>
                        )
                    })}
                    {/* // ))} */}
                    {/* // })} */}
                </CardColumns>
            </div >

            {/* render header only if there are active sites */}
            {crashingSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Crashed Campsites</h3>}
            <div className="d-flex justify-content-center">
                <CardColumns>
                    {crashingSites.map(crash => {
                        crash.messages.filter(msg => {
                            let name = "Waiting for a reply";
                            if (msg.authorName !== user.name) {
                                name = msg.authorName
                            }
                            return (
                                <Cards className="mt-3 shadow" key={crash._id}>
                                    <CardBody className="p-3">
                                        <CardTitle title={crash.campground} />
                                        <CardSubDate arrival={crash.arrival} departure={crash.departure} />
                                        <CardText text={name} />
                                        <CardLink styleBtn={styleBtn} to={`/messages/${crash._id}`} label="Preview" />
                                    </CardBody>
                                </Cards>
                            )
                        })
                    })}
                </CardColumns>
            </div>

            <hr></hr>

        </div >

    )
}
// }

export default MessageBoard;