import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import {useAuth} from "../utils/auth";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
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
    const {user} = useAuth();
    const userID = user.id

    const [createSite, setCreateSite] = useState({
        campground: '',
        park: 'TEST',
        state: 'TEST',
        site: '',
        loop: '',
        people: 0,
        tents: 0,
        cars: 0,
        arrival: {},
        departure: {},
        cost: 0,
        about: '',
        children: false,
        party: false,
        pets: false,
        smokers: false,
        drinkers: false,
        image: "",
        maxPeople: 0,
        maxCars: 0,
        maxCarLength: 0,
        accessible: false,
        createdBy: userID
    });
    const [searchCampground, setSearchCampground] = useState("");
    const [searchPark, setSearchPark] = useState("");


    


    // ON LOAD QUERY FOR DATABASE TO EXTRACT LIST OF CAMPGROUNDS

    // useEffect(() => {
    //     API.getUsers()
    //         .then(res => {
    //             setUsers(res.data.results);
    //             let namesArr = [];
    //             res.data.results.map(result => {
    //                 const sameName = (nameArr) => { return nameArr === result.name.first }
    //                 if (!namesArr.some(sameName)) {
    //                     return namesArr.push(result.name.first);
    //                 }
    //             });
    //             setNames(namesArr);
    //         })
    //         .catch(err => console.log(err));
    //     // include the second argument as an empty array to prevent 
    //     // an infinite loop of API calls
    // }, []);

    const [facilities, setFacilities] = useState([{
        name: "Potwisha",
        area: "Sequoia NP",
        state: "CA"
    },
    {
        name: "Lodgepole",
        area: "Sequoia NP",
        state: "CA"
    },
    {
        name: "Dorst Creek",
        area: "Kings Canyon NP",
        state: "CA"
    }])

    // all campgrounds will go here on load
    const [campgrounds, setCampgrounds] = useState(["Potwisha", "Lodgepole", "Dorst Creek"]);
    // parks connected to the campground selected will go here onChange
    const [parks, setParks] = useState([]);
    // the state connected to the park selected will go here on RecArea change
    const [state, setState] = useState([]);


    // const history = useHistory()

    const handleFormSubmit = event => {
        event.preventDefault();
        // ajax call to get information from recreation.gov for the missing items in the Site model
        
        // this posts the data from the campground to the DB˜
        API.shareNewSite(createSite.campground, createSite.park, createSite.state, createSite.site, createSite.loop, createSite.people, createSite.tents, createSite.cars, createSite.arrival, createSite.departure, createSite.cost, createSite.about, createSite.children, createSite.party, createSite.pets, createSite.smokers, createSite.drinkers, createSite.image, createSite.maxPeople, createSite.maxCars, createSite.maxCarLength, createSite.accessible, createSite.createdBy)
            .then(res => {
                // HOW DO I GET THE ID?? res.data.id
                // history.replace(`/sites/${res.data.id}`)
            })
            .catch(err => alert(err));
    }


    // 
    //  **************************** ON CHANGE EVENTS FOR FORM ****************************
    // 

    const handleCampgroundChange = event => {
        setSearchCampground(event.target.value);
        // console.log(campgrounds);
        // console.log(searchCampground);
        setCreateSite({
            ...createSite,
            campground: event.target.value
        });
        console.log(createSite);
        // in here I need to search inside facilities for an object 
        // that matches campground===searchCampground and push it into 
        // parks useState
    };

    const handleParkChange = event => {
        setSearchPark(event.target.value);
        console.log(createSite);

        // setCreateSite({
        //     ...createSite,
        //     campground: event.target.value
        // });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCreateSite({
            ...createSite,
            [name]: value
        });
        console.log(createSite);
    };

    const onCheckClick = event => {
        const { name, checked } = event.target;
        setCreateSite({
            ...createSite,
            [name]: checked
        })
        console.log(name)
        console.log(createSite);
    }

    // const value = target.type === 'checkbox' ? target.checked : target.value;


    // 
    // **************************** STYLES FOR FORM ****************************
    // 
    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .3)", textShadow: "0 0 10px #302C26" }
    const styleBrand = { color: "#EBC023" }
    const styleText = { fontFamily: "Barlow", fontSize: "1rem", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .4)" }
    const styleTextSm = { fontFamily: "Barlow", fontSize: "0.9rem", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .3)" }
    const stylePreferences = { fontFamily: "Roboto", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }


    // 
    // **************************** RENDERED COMPONENTS ****************************
    // 

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
                    <FormControlList placeholder="Campground" name="campground" list="campground-data" type="text" value={searchCampground} onChange={handleCampgroundChange} />
                    <datalist id="campground-data">
                        {campgrounds.map(campground => (
                            <option value={campground} key={campground} />
                        ))}
                    </datalist>
                </FormGroup>
                {/* *************** NPS RECREATION AREA SEARCH *************** */}
                <FormGroup>
                    <FormControlList placeholder="NPS Recreation Area" name="park" type="text" list="park-data" value={searchPark} onChange={handleParkChange} />
                    <datalist id="park-data">
                        {parks.map(park => (
                            <option value={park} key={park} />
                        ))}
                    </datalist>
                </FormGroup>
                {/* *************** CAMPSITE AND LOOP INPUT FIELDS *************** */}
                <FormRow>
                    <Col xs={7}>
                        <FormGroup>
                            <FormControl placeholder="Campsite Number" name="site" type="text" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="Loop" name="loop" type="text" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </FormRow>
                {/* *************** # PEOPLE / TENTS / CARS INPUT FIELDS *************** */}
                <FormRow>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="# People" name="people" type="number" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="# Tents" name="tents" type="number" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="# Cars" name="cars" type="number" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </FormRow>
                {/* *************** ARRIVAL AND DEPARTURE DATES SELECTORS *************** */}
                <FormText style={styleText} text="ARRIVAL & DEPARTURE DATES" />
                <FormRow>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="Arrival Date" name="arrival" type="date" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl placeholder="Departure Date" name="departure" type="date" onChange={handleChange} />
                        </FormGroup>
                    </Col>
                </FormRow>
                {/* *************** COST PER NIGHT INPUT FIELD *************** */}
                <FormGroup>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-right-0">Cost per night</span>
                        </div>
                        <FormControl placeholder="$ 0.00" name="cost" type="number" onChange={handleChange} />
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