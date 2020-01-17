import React from "react";

const SiteContext = React.createContext({
    campground: '',
    park: '',
    state: '',
    campsite: '',
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
    createdBy: '',
    changeCampground: () => undefined,
});

export default SiteContext;