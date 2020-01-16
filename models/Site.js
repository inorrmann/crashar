const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
    campground: {
        type: String,
        required: true,
        trim: true
    },
    park: {
        type: String,
        required: true,
        default: "N/A"
    },
    state: {
        type: String,
        required: true,
        default: "N/A"
    },
    site: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    loop: {
        type: String,
        trim: true,
        uppercase: true
    },
    people: {
        type: Number,
        required: true,
    },
    tents: {
        type: Number,
        required: true
    },
    cars: {
        type: Number,
        default: 0
    },
    arrival: {
        type: Date,
        required: true
    },
    departure: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    children: {
        type: Boolean
    },
    party: {
        type: Boolean
    },
    pets: {
        type: Boolean
    },
    smokers: {
        type: Boolean
    },
    drinkers: {
        type: Boolean
    },
    image: {
        type: String
    },
    maxPeople: {
        type: Number
    },
    maxCars: {
        type: Number
    },
    maxCarLength: {
        type: Number
    },
    accessible: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true
    }
});

const Site = mongoose.model('Site', SiteSchema);
module.exports = Site;