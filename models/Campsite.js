const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampsiteSchema = new Schema({
    campgroundID: {
        type: String,
        uppercase: true,
        trim: true
    },
    number: {
        type: String,
        uppercase: true,
        trim: true
    },
    loop: {
        type: String,
        uppercase: true,
        trim: true
    },
    accessible: {
        type: Boolean
    },
    image: {
        type: String,
        trim: true
    }
})

const Campsite = mongoose.model("Campsite", CampsiteSchema);
module.exports = Campsite;