import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useLocation } from "react-router-dom";
import "./style.css";
import Loading from "../components/Loading/index";
import Navbar from "../components/Navbar/Navbar";
import NavLink from "../components/NavLink/index";
import ButtonLink from "../components/ButtonLink/index";


function PreviewSite() {
    const [isLoading, setIsLoading] = useState(true);
    const [sharedSite, setSharedSite] = useState({})
    // const [sharedSite, setSharedSite] = useState({
    //     campground: "",
    //     park: "",
    //     state: "",
    //     campsite: "",
    //     loop: "",
    //     people: 0,
    //     tents: 0,
    //     cars: 0,
    //     arrival: "01/01/2020",
    //     departure: "01/01/2020",
    //     cost: 0,
    //     about: "",
    //     children: "",
    //     party: "",
    //     pets: "",
    //     smokers: "",
    //     drinkers: "",
    //     image: "",
    //     accessible: "",
    //     createdBy: ""
    // })
    const [loop, setLoop] = useState("");
    const [accessible, setAccessible] = useState("?");
    const [children, setChildren] = useState("NO");
    const [partiers, setPartiers] = useState("NO");
    const [pets, setPets] = useState("NO");
    const [drinkers, setDrinkers] = useState("NO");
    const [smokers, setSmokers] = useState("NO");


    const { pathname } = useLocation();
    // const { id } = useParams();
    let id = pathname.split("/")[3]
    // console.log(id)

    useEffect(() => {
        // console.log(id)
        API.getSharedSite(id)
            .then(res => {
                console.log(res.data)
                // setSharedSite({
                //     ...sharedSite,
                //     campground: res.data.campground,
                //     park: res.data.park,
                //     state: res.data.state,
                //     campsite: res.data.campsite,
                //     people: res.data.people,
                //     tents: res.data.tents,
                //     cost: res.data.cost,
                //     about: res.data.about,
                //     image: res.data.image,
                //     createdBy: res.data.createdBy
                // });
                setSharedSite(res.data)
                if (res.data.loop !== "") {
                    setLoop(`, Loop ${res.data.loop}`)
                    // setSharedSite({
                    //     ...sharedSite,
                    //     accessible: "YES"
                    // })
                }
                if (res.data.accessible) {
                    setAccessible("YES")
                    // setSharedSite({
                    //     ...sharedSite,
                    //     accessible: "YES"
                    // })
                }
                if (!res.data.accessible) {
                    setAccessible("NO")
                    //     setSharedSite({
                    //         ...sharedSite,
                    //         accessible: "YES"
                    //     })
                }
                if (res.data.children) setChildren("YES")
                if (res.data.pary) setPartiers("YES")
                if (res.data.pets) setPets("YES")
                if (res.data.smokers) setSmokers("YES")
                if (res.data.drinkers) setDrinkers("YES")
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, []);




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
            <div className="topImage" style={{ backgroundImage: `url(${sharedSite.image})` }}>
                <div className="py-5">
                    <h4 className="text-center font-weight-bold mt-3 mx-3 text-wrap" style={textshadow}>{sharedSite.campground}</h4>
                    <h6 className="text-center font-weight-bold m-3 text-wrap" style={textshadow}>{sharedSite.park}</h6>
                    <br></br>
                    <h5 className="text-center font-weight-bold m-3 text-wrap" style={textshadow}>Site {sharedSite.campsite}{loop}</h5>
                </div>
            </div>
            <div className="text-light text-center">
                <h5 className="mt-4 mb-3">Cost per night ${sharedSite.cost}</h5>

                <div className="d-flex flex-row justify-content-between m-4">
                    <h4 className="text-justify d-inline">{sharedSite.people} <i className="fas fa-user"></i></h4>
                    <h4 className="text-justify d-inline">{sharedSite.tents} <i className="fas fa-campground"></i></h4>
                    <h4 className="text-justify d-inline">{sharedSite.cars} <i className="fas fa-car-alt"></i></h4>
                    <h4 className="text-justify d-inline align-baseline">{accessible} <i className="fas fa-wheelchair"></i></h4>
                </div>

                <div className="d-flex flex-row justify-content-between m-4">
                    <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>From: 01/26/2020</h5>
                    <h5 className="text-justify d-inline" style={{ fontSize: "1.2rem" }}>Until: 01/28/2020</h5>
                </div>

                <h6 className="mt-4 text-center" style={{ fontSize: "1.1rem" }}>PREFERENCES:</h6>
                <div className="d-flex flex-row justify-content-between mx-4">
                    <h6 className="text-center d-inline3">{children} Children</h6>
                    <h6 className="text-center d-inline">{partiers} Partiers</h6>
                    <h6 className="text-center d-inline">{pets} Pets</h6>
                    <h6 className="text-center d-inline">{smokers} Smokers</h6>
                    <h6 className="text-center d-inline">{drinkers} Drinkers</h6>
                </div>

                <h6 className="text-center mt-4" style={{ fontSize: "1.1rem" }}>ABOUT THE CAMPERS:</h6>
                <h6 className="text-justify px-4">{sharedSite.about}</h6>
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