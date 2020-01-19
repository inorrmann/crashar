import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import { useAuth } from "../utils/auth";
import Col from "react-bootstrap/Col";
import Navbar from "../components/Navbar/Navbar";
import NavBrand from "../components/NavbarBrand/index";
import Button from "../components/ButtonSubmit/index";
import Forms from "../components/Form/index";
import FormGroup from "../components/FormGroup/index";
import FormControl from "../components/FormControl/index";
import FormText from "../components/FormText/index";
import FormControlList from "../components/FormControlList/index";
import FormRow from "../components/FormRow/index";
import FormCheck from "../components/FormCheck/index";


function ShareSite() {
    const [isLoading, setIsLoading] = useState(true)

    // retrieve userID to embed it to the posting 
    const { user } = useAuth();
    const userID = user.id

    const [createSite, setCreateSite] = useState({
        campground: "",
        park: "",
        // state: "",
        campsite: "",
        loop: "",
        people: 0,
        tents: 0,
        cars: 0,
        arrival: {},
        departure: {},
        cost: 0,
        about: "",
        children: false,
        party: false,
        pets: false,
        smokers: false,
        drinkers: false,
        image: "",
        accessible: false,
        createdBy: userID,
    });
    // array of campground objects imported from DB
    const [facilities, setFacilities] = useState([]);
    // array of campsite objects imported from DB
    const [campsites, setCampsites] = useState([]);
    // array of campground names taken from facilities
    const [campgrounds, setCampgrounds] = useState([]);
    const [searchCampground, setSearchCampground] = useState("");
    const [parks, setParks] = useState([]);
    const [siteNumbers, setSiteNumbers] = useState([]);
    const [loops, setLoops] = useState([]);


    // On load query database to access all facilities & campsites stored
    useEffect(() => {
        API.getAllFacilities()
            .then(res => {
                setFacilities(res.data);
                let namesArr = [];
                res.data.map(result => {
                    const sameName = (nameArr) => { return nameArr === result.name }
                    if (!namesArr.some(sameName)) {
                        return namesArr.push(result.name);
                    }
                });
                setCampgrounds(namesArr);
                setIsLoading(false)
            })
            .catch(err => console.log(err));
        API.getAllCampsites()
            .then(res => {
                setCampsites(res.data);
            })
            .catch(err => console.log(err))
    }, []);


    // const history = useHistory()


    const handleFormSubmit = event => {
        event.preventDefault();
        setIsLoading(true)

        let extraInfo = {
            state: "",
            image: "",
            accessible: false
        }
        // find the state of the facility 
         extraInfo.state = facilities.find(element => element.park === createSite.park).state
        // find the image of the campsite

        // find the accessibility status of the campsite

        // this posts the data from the campground to the DB˜
        API.shareNewSite(createSite.campground, createSite.park, extraInfo.state, createSite.campsite, createSite.loop, createSite.people, createSite.tents, createSite.cars, createSite.arrival, createSite.departure, createSite.cost, createSite.about, createSite.children, createSite.party, createSite.pets, createSite.smokers, createSite.drinkers, createSite.image, createSite.accessible, createSite.createdBy)
            .then(res => {
                console.log(res)
                // HOW DO I GET THE ID?? res.data.id
                // history.replace(`/sites/${res.data.id}`)
                setIsLoading(false)
            })
            .catch(err => alert(err));
    }


    // 
    //  **************************** ON CHANGE EVENTS FOR FORM ****************************
    // 

    // ****** CAMPGROUND ******
    const handleCampgroundChange = event => {
        setSearchCampground(event.target.value);
        setCreateSite({
            ...createSite,
            campground: event.target.value,
            park: "",
            state: ""
        });
        let parkArr = []
        facilities.map(facility => {
            if (facility.name === event.target.value) {
                return parkArr.push(facility.park)
            }
        });
        setParks(parkArr);
    };

    // ****** PARK ******
    const handleParkChange = event => {
        setCreateSite({
            ...createSite,
            park: event.target.value
        });
        // populate the campsites from the campground and park info
        var campID;
        facilities.filter((facility) => {
            if (facility.name === createSite.campground && facility.park === event.target.value) {
                campID = facility.campgroundID;
                return campID;
            }
        })
        let campNumber = [];
        campsites.filter((site) => {
            if (site.campgroundID === campID) {
                campNumber.push(site.number);
            }
        })
        campNumber.sort((a, b) => (a > b) ? 1 : -1);
        setSiteNumbers(campNumber);
    };


    // ****** CAMPSITE ******
    const handleCampsiteInput = event => {
        setCreateSite({
            ...createSite,
            campsite: event.target.value
        });
        // populate the loops from the campsite, campground and park info
        var campID;
        facilities.filter((facility) => {
            if (facility.name === createSite.campground && facility.park === createSite.park) {
                campID = facility.campgroundID;
                return campID;
            }
        })
        let loopName = [];
        campsites.filter((site) => {
            if (site.campgroundID === campID && site.number === event.target.value) {
                // avoid loop duplicates from the loop array
                const sameName = (nameLoop) => { return nameLoop === site.loop }
                if (!loopName.some(sameName)) {
                    loopName.push(site.loop);
                }
            }
        })
        setLoops(loopName);
    };

    // ****** OTHER ELEMENTS ******
    const handleChange = event => {
        const { name, value } = event.target;
        setCreateSite({
            ...createSite,
            [name]: value
        });
    };

    // ****** SWITCHES ******
    const onCheckClick = event => {
        const { name, checked } = event.target;
        setCreateSite({
            ...createSite,
            [name]: checked
        })
        console.log(createSite);
    };


    // 
    // **************************** STYLES FOR FORM ****************************
    // 
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .3)", textShadow: "0 0 10px #302C26" }
    const styleBrand = { color: "#EBC023" }
    const styleTextSm = { fontFamily: "Barlow", fontSize: "0.9rem", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .3)" }
    const stylePreferences = { fontFamily: "Roboto", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }


    // 
    // **************************** RENDERED COMPONENTS ****************************
    // 
    if (isLoading) {
        return (
            <div className="loading">
                <h2 className="text-center text-light font-weight-bold m-5 p-5">LOADING...</h2>
            </div>
        )
    }

    return (
        <div className="shareSite overflow-auto pb-5">
            <Navbar style={styleNavbar}>
                <NavBrand style={styleBrand} />
            </Navbar>
            <br></br>
            <h3 className="display-4 text-center" style={{ fontWeight: "bold", color: "#302C26", textShadow: "0 0 20px #FFF8D5" }}>Share a Site</h3>
            <Forms onSubmit={handleFormSubmit}>
                {/* *************** CAMPGROUND SEARCH *************** */}
                <FormGroup>
                    <FormControlList placeholder="Campground *" name="campground" list="campground-data" type="text" value={searchCampground} onChange={handleCampgroundChange} required />
                    <datalist id="campground-data">
                        {campgrounds.map(campground => (
                            <option value={campground} key={campground} />
                        ))}
                    </datalist>
                </FormGroup>
                {/* *************** NPS RECREATION AREA SEARCH *************** */}
                <FormGroup>
                    <select className="custom-select" name="park" onChange={handleParkChange}>
                        <option value="null">NPS Recreation Area *</option>
                        {parks.map(park => (
                            <option value={park} key={park}>{park}</option>
                        ))}
                    </select>
                </FormGroup>
                {/* *************** CAMPSITE AND LOOP INPUT FIELDS *************** */}
                <FormRow>
                    <Col xs={7}>
                        <FormGroup>
                            <select className="custom-select" name="campsite" onChange={handleCampsiteInput}>
                                <option value="null">Campsite *</option>
                                {siteNumbers.map(site => (
                                    <option value={site} key={site}>{site}</option>
                                ))}
                            </select>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <select className="custom-select" name="loop" onChange={handleChange}>
                                <option value="null">Loop</option>
                                {loops.map(loop => (
                                    <option value={loop} key={loop}>{loop}</option>
                                ))}
                            </select>
                        </FormGroup>
                    </Col>
                </FormRow>
                {/* *************** # PEOPLE / TENTS / CARS INPUT FIELDS *************** */}
                <FormRow>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="# People *" name="people" type="number" onChange={handleChange} required />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="# Tents *" name="tents" type="number" onChange={handleChange} required />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="# Cars" name="cars" type="number" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </FormRow>
                {/* *************** ARRIVAL AND DEPARTURE DATES SELECTORS *************** */}
                <FormRow>
                    <Col>
                        <FormGroup>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white border-right-0">Arrival Date *</span>
                                </div>
                                <FormControl placeholder="Arrival Date" name="arrival" type="date" onChange={handleChange} required />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white border-right-0">Departure Date *</span>
                                </div>
                                <FormControl placeholder="Departure Date" name="departure" type="date" onChange={handleChange} required />
                            </div>
                        </FormGroup>
                    </Col>
                </FormRow>
                {/* *************** COST PER NIGHT INPUT FIELD *************** */}
                <FormGroup>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-right-0">Cost per night <span>&emsp;&emsp;</span> $</span>
                        </div>
                        <FormControl placeholder="0.00" name="cost" type="number" onChange={handleChange} required />
                    </div>
                    <FormText style={styleTextSm} text="Do not ask for more than what you paid per night" />
                </FormGroup>
                {/* *************** ABOUT US INPUT FIELDS *************** */}
                <FormGroup>
                    <textarea className="form-control shadow"
                        placeholder="About us"
                        name="about"
                        type="text"
                        id="about"
                        rows="3"
                        onChange={handleChange}
                    ></textarea>
                </FormGroup>
                {/* *************** PREFERENCES CHECKBOXES *************** */}
                <div className="py-3" style={{ color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .4)" }}>
                    <h5 className="text-center" style={stylePreferences}>PREFERENCES</h5>
                    <div className=" ml-5 px-5">
                        <FormCheck id="children-switch" name="children" label="CHILDREN" onClick={onCheckClick} />
                        <FormCheck id="party-switch" name="party" label="PARTY PEOPLE" onClick={onCheckClick} />
                        <FormCheck id="pets-switch" name="pets" label="PETS" onClick={onCheckClick} />
                        <FormCheck id="smokers-switch" name="smokers" label="SMOKERS" onClick={onCheckClick} />
                        <FormCheck id="drinkers-switch" name="drinkers" label="DRINKERS" onClick={onCheckClick} />
                    </div>
                </div>
                {/* *************** SUBMIT BUTTON *************** */}
                <div className="text-center mt-4">
                    <Button style={styleButton} name="SUBMIT" />
                </div>
            </Forms>
        </div>
    )
}


export default ShareSite;