import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar";
import NavBrand from "../components/NavbarBrand"
import NavLogin from "../components/NavbarLogin/index";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal"
import Button from "../components/ButtonSubmit/index";
import Forms from "../components/Form/index";
import FormGroup from "../components/FormGroup/index";
import FormControl from "../components/FormControl/index";
import FormControlList from "../components/FormControlList/index";
import FormRow from "../components/FormRow/index";
import Loading from "../components/Loading/index";
import FormText from "../components/FormText/index"
import InputPrepend from "../components/InputPrepend"

function FindSites() {
    const [isLoading, setIsLoading] = useState(true)
    const [findSite, setFindSite] = useState({
        state: "",
        park: "",
        campground: "",
        arrival: "",
        departure: "",
        people: 0
    })

    // campground info imported from DB
    const [facilities, setFacilities] = useState([]);
    // states imported from DB
    const [states, setStates] = useState([]);
    const [searchState, setSearchState] = useState([]);
    const [parks, setParks] = useState([]);
    const [campgrounds, setCampgrounds] = useState([]);

    // alerts in response to entering wrong dates
    const [alertArrival, setAlertArrival] = useState(false)
    const handleCloseArrival = () => setAlertArrival(false);
    const [alertDeparture, setAlertDeparture] = useState(false);
    const handleCloseDeparture = () => setAlertDeparture(false)
    const [alertTime, setAlertTime] = useState(false);
    const handleCloseTime = () => setAlertTime(false)

    useEffect(() => {
        API.getAllFacilities()
            .then(res => {
                setFacilities(res.data);
                let statesArr = [];
                res.data.map(result => {
                    const sameName = (stateArr) => { return stateArr === result.state.trim() }
                    if (!statesArr.some(sameName)) {
                        return statesArr.push(result.state.trim());
                    }
                    else return result
                });
                statesArr.sort((a, b) => (a > b) ? 1 : -1);
                setStates(statesArr);
                setIsLoading(false)
            })
            .catch(err => console.log(err));
    }, []);


    // ****** SEARCH STATE ******
    const handleStateChange = event => {
        setSearchState(event.target.value);
        setFindSite({
            ...findSite,
            state: event.target.value,
            park: "",
            campground: ""
        });
        let parksArr = []
        facilities.map(facility => {
            if (facility.state === event.target.value) {
                const sameName = (parkArr) => { return parkArr === facility.park.trim() }
                if (!parksArr.some(sameName)) {
                    return parksArr.push(facility.park.trim());
                }
                else return facility
            }
            else return facility;
        });
        parksArr.sort((a, b) => (a > b) ? 1 : -1);
        setParks(parksArr);
    };

    // ****** SEARCH NPS REC AREA ******
    const handleParkChange = event => {
        setFindSite({
            ...findSite,
            park: event.target.value
        });
        // // populate the campground from park & state info
        var campground = [];
        facilities.filter((facility) => {
            if (facility.state === findSite.state && facility.park === event.target.value) {
                campground.push(facility.name);
                return campground;
            }
            else return facility;
        })
        campground.sort((a, b) => (a > b) ? 1 : -1);
        setCampgrounds(campground);
    };

    // ****** OTHER ELEMENTS ******
    const handleChange = event => {
        const { name, value } = event.target;
        setFindSite({
            ...findSite,
            [name]: value
        });
    };


    const history = useHistory()

    const handleFormSubmit = event => {
        event.preventDefault();

        const arrival = new Date(findSite.arrival);
        const arrivalTime = arrival.getTime();
        const departure = new Date(findSite.departure);
        const departureTime = departure.getTime();

        if (arrivalTime < Date.now()) {
            setAlertArrival(true)
        }
        else if (departureTime < Date.now()) {
            setAlertDeparture(true)
        }
        else if (departureTime < arrivalTime) {
            setAlertTime(true)
        }
        else {
            search()
        }
    }

    function search() {
        let search = []
        for (let [key, value] of Object.entries(findSite)) {
            search.push(encodeURI(`${key}=${value}`))
        }
        history.push(`/sites/results?${search.join("&")}`)
    }



    // ************ STYLES ************
    const styleLink = { color: "#EBC023", fontSize: "1.2rem", paddingLeft: ".5rem", textShadow: "0 0 10px black" }
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", textShadow: "0 0 10px black", backgroundColor: "rgba(15, 14, 12, .2)" }
    const styleLogin = { color: "#EBC023" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }
    const styleText = { textAlign: "center", fontFamily: "Barlow", fontSize: "0.9rem", color: "#EBC023", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .3)" }



    // 
    // **************************** RENDERED COMPONENTS ****************************
    // 
    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            {/* ********** ARRIVAL < NOW MODAL ********** */}
            <>
                <Modal show={alertArrival} onHide={handleCloseArrival} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Oooops!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You selected an arrival date in the past</Modal.Body>
                </Modal>
            </>
            {/* ********** DEPARTURE < NOW MODAL ********** */}
            <>
                <Modal show={alertDeparture} onHide={handleCloseDeparture} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Oooops!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You selected a departure date in the past</Modal.Body>
                </Modal>
            </>
            {/* ********** DEPARTURE < ARRIVAL MODAL ********** */}
            <>
                <Modal show={alertTime} onHide={handleCloseTime} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Oooops!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your departure date is before your arrival date</Modal.Body>
                </Modal>
            </>
            <div className="find-sites overflow-auto">
                <Navbar style={styleNavbar}>
                    <NavBrand style={{ paddingLeft: ".5rem" }} />
                    <div className="ml-auto">
                        <NavLogin style={styleLogin} />
                    </div>
                </Navbar>
                <br></br>
                <br></br>
                <h1 className="text-center" style={{ fontWeight: "bold", color: "#EBC023", textShadow: "0 0 20px #0F0E0C" }}>Find a Campsite</h1>
                <br></br>
                <br></br>

                <div style={styleText}>All fields are required</div>

                <div className="d-flex justify-content-center">
                    <Forms onSubmit={handleFormSubmit}>
                        {/* *************** STATE SEARCH *************** */}
                        <FormGroup>
                            <div className="input-group">
                                <InputPrepend prepend="State" />
                                <FormControlList placeholder="CA" name="state" list="state-data" type="text" value={searchState} onChange={handleStateChange} required />
                                <datalist id="state-data">
                                    {states.map(state => (
                                        <option value={state} key={state} />
                                    ))}
                                </datalist>
                            </div>
                        </FormGroup>
                        {/* *************** NPS RECREATION AREA SEARCH *************** */}
                        <FormGroup>
                            <select className="custom-select select" name="park" onChange={handleParkChange} required={true}>
                                <option value="">NPS Recreation Area</option>
                                {parks.map(park => (
                                    <option value={park} key={park}>{park}</option>
                                ))}
                            </select>
                        </FormGroup>
                        {/* *************** CAMPGROUND SEARCH *************** */}
                        <FormGroup>
                            <select className="custom-select" name="campground" onChange={handleChange}>
                                <option value="">Campground</option>
                                {campgrounds.map(camp => (
                                    <option value={camp} key={camp}>{camp}</option>
                                ))}
                            </select>
                        </FormGroup>
                        {/* *************** ARRIVAL AND DEPARTURE DATES SELECTORS *************** */}
                        <FormRow>
                            <Col>
                                <FormGroup>
                                    <div className="input-group">
                                        <InputPrepend prepend="Arrival Date" />
                                        <FormControl placeholder="Arrival Date" name="arrival" type="date" onChange={handleChange} required />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <div className="input-group">
                                        <InputPrepend prepend="Departure Date" />
                                        <FormControl placeholder="Departure Date" name="departure" type="date" onChange={handleChange} required />
                                    </div>
                                </FormGroup>
                            </Col>
                        </FormRow>
                        {/* *************** # PEOPLE / TENTS / CARS INPUT FIELDS *************** */}
                        <FormGroup>
                            <div className="input-group">
                                <InputPrepend prepend="Min People" />
                                <FormControl placeholder="1" name="people" type="number" onChange={handleChange} required />
                            </div>
                        </FormGroup>
                        {/* *************** SUBMIT BUTTON *************** */}
                        <div className="text-center mt-4">
                            <Button style={styleButton} name="SEARCH" />
                        </div>
                    </Forms>
                </div>
            </div>
        </>
    )
}

export default FindSites;