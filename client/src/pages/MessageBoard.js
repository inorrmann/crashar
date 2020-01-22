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
import CardDelete from "../components/CardDelete/index";
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
        API.findAllMessages(id)
            .then(res => {
                let share = [];
                let crash = [];

                res.data.map(message => {
                    if (message.siteOwner === userID) {
                        share.push(message)
                    } else if (message.siteOwner !== userID) {
                        crash.push(message)
                    }
                })
                setSharingSites(share);
                setCrashingSites(crash);

                setIsLoading(false);
            })
            .catch(err => console.log(err))
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

                {/* render header only if there are messages for shared sites */}
                {sharingSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Shared Campsites</h3>}
                <div className="d-flex justify-content-center">
                    <CardColumns>
                        {sharingSites.map(share => (
                            <Cards className="mt-3 shadow">
                                <CardBody className="p-3">
                                    <CardTitle title={share.campground} />
                                    <CardSubDate arrival={share.arrival} departure={share.departure} />
                                    <CardText text="figure out how to get the name of the sender" />
                                    <CardLink styleBtn={styleBtn} to={`/messages/${share._id}`} label="Open" />
                                </CardBody>
                            </Cards>
                        ))}
                    </CardColumns>
                </div >

                {/* render header only if there are active sites */}
                {crashingSites[0] && <h3 className="font-weight-bold ml-3" style={headers}>Crashed Campsites</h3>}
                <div className="d-flex justify-content-center">
                    <CardColumns>
                        {crashingSites.map(crash => (
                            <Cards className="mt-3 shadow">
                                <CardBody className="p-3">
                                    <CardTitle title={crash.campground} />
                                    <CardSubDate arrival={crash.arrival} departure={crash.departure} />
                                    <CardText text="figure out how to get the name of the sender" />
                                    <CardLink styleBtn={styleBtn} to={`/messages/${crash._id}`} label="Preview" />
                                </CardBody>
                            </Cards>
                        ))}
                    </CardColumns>
                </div>

                <hr></hr>

            </div >

        )
    }
}

export default MessageBoard;