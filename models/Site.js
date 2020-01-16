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
        type: Boolean,
        default: true
    },
    party: {
        type: Boolean,
        default: true
    },
    pets: {
        type: Boolean,
        default: true
    },
    smokers: {
        type: Boolean,
        default: true
    },
    drinkers: {
        type: Boolean,
        default: true
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
    }
});

const Site = mongoose.model('Site', SiteSchema);
module.exports = Site;