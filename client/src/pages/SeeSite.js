import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import { useLocation, useHistory } from "react-router-dom";
import "./style.css";
import Loading from "../components/Loading/index";
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import placeholder from "../pages/images/camping-placeholder.png";
import NavButton from "../components/NavButton";
import ButtonOnClick from "../components/ButtonOnClick"


function SeeSite() {
    // retrieve userID to embed it to the message 
    const { user } = useAuth();
    const userID = user.id

    const [isLoading, setIsLoading] = useState(true);
    const [sharedSite, setSharedSite] = useState({})
    const [loop, setLoop] = useState("");
    const [accessible, setAccessible] = useState("?");
    const [children, setChildren] = useState("NO");
    const [partiers, setPartiers] = useState("NO");
    const [pets, setPets] = useState("NO");
    const [drinkers, setDrinkers] = useState("NO");
    const [smokers, setSmokers] = useState("NO");
    const [arrival, setArrival] = useState("");
    const [departure, setDeparture] = useState("");
    const [image, setImage] = useState("");
    const [names, setNames] = useState({
        owner: "",
        guest: user.name
    })


    const { pathname } = useLocation();
    let id = pathname.split("/")[3]

    useEffect(() => {
        API.getSharedSite(id)
            .then(res => {
                setSharedSite(res.data)
                if (res.data.image === "") {
                    setImage(placeholder)
                }
                else if (res.data.image !== "") {
                    setImage(res.data.image)
                }
                if (res.data.loop !== "") {
                    setLoop(`, Loop ${res.data.loop}`)
                }
                if (res.data.accessible) {
                    setAccessible("YES")
                }
                if (!res.data.accessible) {
                    setAccessible("NO")
                }
                if (res.data.children) setChildren("YES")
                if (res.data.pary) setPartiers("YES")
                if (res.data.pets) setPets("YES")
                if (res.data.smokers) setSmokers("YES")
                if (res.data.drinkers) setDrinkers("YES")

                // reorganize the arrival date
                let yearArr = res.data.arrival.split("-")[0]
                let monthArr = res.data.arrival.split("-")[1]
                let dayArr = res.data.arrival.split("-")[2].slice(0, 2)
                let arrival = `${monthArr}/${dayArr}/${yearArr}`
                setArrival(arrival);

                // reorganize the departure date
                let yearDep = res.data.departure.split("-")[0]
                let monthDep = res.data.departure.split("-")[1]
                let dayDep = res.data.departure.split("-")[2].slice(0, 2)
                let departure = `${monthDep}/${dayDep}/${yearDep}`
                setDeparture(departure);

                setIsLoading(false)
                return res;
            })
            .catch(err => console.log(err))
            .then(res => {
                API.getUser(res.data.createdBy)
                    .then(res => {
                        setNames({
                            ...names,
                            owner: res.data.firstName,
                        })
                    })
                    .catch(err => console.log(err))
            })
    }, []);


    const history = useHistory()

    const goBack = event => {
        event.preventDefault();
        history.goBack()
    }


    function contactCamper() {

        // API.findMessage(sharedSite.createdBy, userID, userID._id)
console.log(names)

        // if 404 response: 
        // create new message POST request
        API.createMessage(sharedSite.createdBy, names.owner, userID, names.guest, sharedSite._id, sharedSite.people, sharedSite.tents, sharedSite.cars, sharedSite.campground, sharedSite.arrival, sharedSite.departure, userID, "")
            .then(res => {
                history.push(`/messages/${res.data._id}`)
                setIsLoading(false)
            })
            .catch(err => alert(err))

        // else use the response to go to the current view for the messages 

    }


    const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px #302C26" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .4)" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }
    const textshadow = { color: "#EBC023", textShadow: "0 0 10px black" }
    const textshadow1 = { color: "#EBC023", textShadow: "0 0 10px #302C26", backgroundColor: "rgba(15, 14, 12, .4)" }


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="preview-site overflow-auto">

            <Navbar class="py-3" style={styleNavbar}>
                <NavLink link="/signup" styleLink={styleLink} name="Main Menu" />
                <div className="ml-auto">
                    <NavButton onClick={goBack} styleNavBtn={styleLink} btnName="Return to Results" />
                </div>
            </Navbar>
            <div className="topImage" style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="mt-5 mx-3" style={textshadow1}>
                    <h4 className="text-center font-weight-bold mt-3 mx-3 text-wrap" style={textshadow}>{sharedSite.campground}</h4>
                    <h6 className="text-center font-weight-bold mx-3 text-wrap" style={textshadow}>{sharedSite.park}</h6>
                    <h5 className="text-center font-weight-bold mx-3 text-wrap" style={textshadow}>Site {sharedSite.campsite}{loop}</h5>
                </div>
            </div>
            <div className="text-light text-center">
                <h5 className="mt-4 mb-3">Cost per night ${sharedSite.cost}</h5>

                <div className="d-flex flex-row justify-content-between m-4">
                    <h4 className="text-justify d-inline">{sharedSite.people} <i className="fas fa-user"></i></h4>
                    <h4 className="text-justify d-inline">{sharedSite.tents} <i className="fas fa-campground"></i></h4>
                    <h4 className="text-justify d-inline">{sharedSite.cars} <i className="fas fa-car-alt"></i></h4>
                    <h4 className="text-justify d-inline">{accessible} <i className="fas fa-wheelchair"></i></h4>
                </div>

                <div className="d-flex flex-row justify-content-between m-4">
                    <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>From: {arrival}</h5>
                    <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>Until: {departure}</h5>
                </div>

                <h6 className="mt-4 text-center" style={{ fontSize: "1.1rem" }}>PREFERENCES:</h6>
                <div className="d-flex flex-row justify-content-between mx-4">
                    <h6 className="text-center d-inline">{children} Children</h6>
                    <h6 className="text-center d-inline">{partiers} Partiers</h6>
                    <h6 className="text-center d-inline">{pets} Pets</h6>
                    <h6 className="text-center d-inline">{smokers} Smokers</h6>
                    <h6 className="text-center d-inline">{drinkers} Drinkers</h6>
                </div>

                <h6 className="text-center mt-4" style={{ fontSize: "1.1rem" }}>ABOUT THE CAMPERS:</h6>
                <h6 className="text-justify px-4">{sharedSite.about}</h6>
            </div>
            <div className="text-center mt-4">
                <ButtonOnClick style={styleButton} onClick={contactCamper} submitName="CONTACT CAMPERS" />
                <hr></hr>
                <p className="text-muted mb-2">Data Source: ridb.recreation.gov</p>
            </div>
        </div>

    )
}

export default SeeSite;