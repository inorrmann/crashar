import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar";
import NavBrand from "../components/NavbarBrand/index";
import Button from "../components/ButtonSubmit/index";
import Forms from "../components/Form/index";
import FormGroup from "../components/FormGroup/index";
import FormControl from "../components/FormControl/index";
import FormText from "../components/FormText/index";
import FormControlList from "../components/FormControlList/index";
import FormRow from "../components/FormRow/index";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


function ShareSite() {

    const [createSite, setCreateSite] = useState({
        campground: '',
        park: '',
        state: '',
        site: '',
        loop: '',
        people: 0,
        tents: 0,
        cars: 0,
        arrival: {},
        departure: {},
        cost: 0,
        about: '',
        children: true,
        party: true,
        pets: true,
        smokers: true,
        drinkers: true,
        maxPeople: 0,
        maxCars: 0,
        maxCarLength: 0,
        accessible: true
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

    // const [facilities, setFacilities] = useState(dataTest)

    // const dataTest = [{
    //     name: "Potwisha",
    //     area: "Sequoia NP",
    //     state: "CA"
    // },
    // {
    //     name: "Lodgepole",
    //     area: "Sequoia NP",
    //     state: "CA"
    // },
    // {
    //     name: "Dorst Creek",
    //     area: "Kings Canyon NP",
    //     state: "CA"
    // }]

    const campTest = ["Potwisha", "Lodgepole", "Dorst Creek"]
    const areaTest = ["Sequoia NP", "Kings Canyon NP"]
    const stateTest = "CA"

    // all campgrounds will go here on load
    const [campgrounds, setCampgrounds] = useState(["Potwisha", "Lodgepole", "Dorst Creek"]);
    // parks connected to the campground selected will go here onChange
    const [parks, setParks] = useState(areaTest);
    // the state connected to the park selected will go here on RecArea change
    const [state, setState] = useState(stateTest);


    // const history = useHistory()

    const handleFormSubmit = event => {
        event.preventDefault();
        // ajax call to get information from recreation.gov for the missing items in the Site model
        API.shareNewSite(createSite.campground, createSite.park, createSite.state, createSite.site, createSite.loop, createSite.people, createSite.tents, createSite.cars, createSite.arrival, createSite.departure, createSite.cost, createSite.about, createSite.children, createSite.party, createSite.pets, createSite.smokers, createSite.drinkers, createSite.maxPeople, createSite.maxCars, createSite.maxCarLength, createSite.accessible)
            .then(res => {
                // HOW DO I GET THE ID?? res.data.id
                // history.replace(`/sites/${res.data.id}`)
            })
            .catch(err => alert(err));
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setCreateSite({
            ...createSite,
            [name]: value
        });
    };

    const handleCampgroundChange = event => {
        setSearchCampground(event.target.value);
        console.log(campgrounds);
        console.log(searchCampground);
        // setCreateSite({
        //     ...createSite,
        //     campground: event.target.value
        // });
    };

    const handleParkChange = event => {
        setSearchPark(event.target.value);
        console.log(parks);
        console.log(searchPark);
        // setCreateSite({
        //     ...createSite,
        //     campground: event.target.value
        // });
    };

    const styleNavbar = { fontFamily: "Roboto", fontSize: "1.2rem", backgroundColor: "rgba(15, 14, 12, .3)", textShadow: "0 0 10px #302C26" }
    const styleBrand = { color: "#EBC023" }
    const styleText = { fontFamily: "Barlow", fontSize: "1rem", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .3)" }
    // const styleText = { fontFamily: "Barlow", fontSize: "1.1rem", fontWeight: "bold", color: "#302C26", textShadow: "0 0 20px #FFF8D5", backgroundColor: "rgba(255, 248, 213, .3)" }
    const styleTextSm = { fontFamily: "Barlow", fontSize: "0.9rem", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .3)" }
    const stylePreferences = { fontFamily: "Roboto", fontWeight: "bold", color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C" }
    const styleButton = { backgroundColor: "#EBC023", color: "#302C26", fontWeight: "bold" }



    return (
        <div className="shareSite overflow-auto pb-5">
            <Navbar style={styleNavbar}>
                <NavBrand style={styleBrand} />
            </Navbar>
            <br></br>
            <h3 className="display-4 text-center" style={{ fontWeight: "bold", color: "#302C26", textShadow: "0 0 20px #FFF8D5" }}>Share a Site</h3>
            <Forms onSubmit={handleFormSubmit}>
                <FormGroup>
                    <FormControlList
                        placeholder="Campground"
                        name="campground"
                        list="campground-data"
                        type="text"
                        value={searchCampground}
                        onChange={handleCampgroundChange}
                    />
                    <datalist id="campground-data">
                        {campgrounds.map(campground => (
                            <option value={campground} key={campground}/>
                        ))}
                    </datalist>
                </FormGroup>

                <FormGroup>
                    <FormControlList
                        placeholder="NPS Recreation Area"
                        name="park"
                        type="text"
                        list="park-data"
                        value={searchPark}
                        onChange={handleParkChange}
                    />
                    <datalist id="park-data">
                        {parks.map(park => (
                            <option value={park} key={park} />
                        ))}
                    </datalist>
                </FormGroup>

                <FormRow>
                    <Col xs={7}>
                        <FormGroup>
                            <FormControl
                                placeholder="Campsite Number"
                                name="site"
                                type="text"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl
                                placeholder="Loop"
                                name="loop"
                                type="text"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </FormRow>

                <FormRow>
                    <Col>
                        <FormGroup>
                            <FormControl
                                placeholder="# People"
                                name="people"
                                type="number"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl
                                placeholder="# Tents"
                                name="tents"
                                type="number"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl
                                placeholder="# Cars"
                                name="cars"
                                type="number"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </FormRow>

                <FormRow>
                    <Col>
                        <FormGroup>
                            <FormText style={styleText} text="ARRIVAL & DEPARTURE DATES" />
                            <FormControl
                                placeholder="Arrival Date"
                                name="arrival"
                                type="date"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <FormControl
                                placeholder="Departure Date"
                                name="departure"
                                type="date"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </FormRow>

                <FormGroup>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-right-0">Cost per night</span>
                        </div>
                        <FormControl
                            placeholder="$ 0.00"
                            name="cost"
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    <FormText style={styleTextSm} text="Do not ask for more than what you paid per night" />
                </FormGroup>

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


                <div className="pt-3" style={{ color: "#FFF8D5", textShadow: "0 0 20px #0F0E0C", backgroundColor: "rgba(15, 14, 12, .4)" }}>
                    <h5 className="text-center" style={stylePreferences}>PREFERENCES</h5>

                    <div className="px-3">
                        <Form.Check inline className="align-middle" label="YES" type="checkbox" id="true" name="children" />
                        <Form.Check inline className="align-middle" label="NO" type="checkbox" id="false" name="children" />
                        <Form.Label className="pl-3" inline="true">CHILDREN</Form.Label>
                    </div>

                    <div className="px-3">
                        <Form.Check inline className="align-middle" label="YES" type="checkbox" id="true" name="party" />
                        <Form.Check inline className="align-middle" label="NO" type="checkbox" id="false" name="party" />
                        <Form.Label className="pl-3" inline="true">PARTY PEOPLE</Form.Label>
                    </div>

                    <div className="px-3">
                        <Form.Check inline className="align-middle" label="YES" type="checkbox" id="true" name="pets" />
                        <Form.Check inline className="align-middle" label="NO" type="checkbox" id="false" name="pets" />
                        <Form.Label className="pl-3" inline="true">PETS</Form.Label>
                    </div>

                    <div className="px-3">
                        <Form.Check inline className="align-middle" label="YES" type="checkbox" id="true" name="smokers" />
                        <Form.Check inline className="align-middle" label="NO" type="checkbox" id="false" name="smokers" />
                        <Form.Label className="pl-3" inline="true">SMOKERS</Form.Label>
                    </div>

                    <div className="px-3">
                        <Form.Check inline className="align-middle" label="YES" type="checkbox" id="true" name="drinkers" />
                        <Form.Check inline className="align-middle" label="NO" type="checkbox" id="false" name="drinkers" />
                        <Form.Label className="pl-3" inline="true">DRINKERS</Form.Label>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <Button style={styleButton} name="SUBMIT" />
                </div>
            </Forms>

        </div>
    )





}

export default ShareSite;